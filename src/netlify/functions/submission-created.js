// Loosely based on:
// https://www.seancdavis.com/posts/netlify-function-sends-conditional-email/
const sendMail = async (
    sparkpostToken,
    fromEmail,
    toEmail,
    siteName,
    siteDomain,
    title,
    path,
    id,
    date,
    name,
    email,
    url,
    comment,
  ) => {
    const options = {
      hostname: SPARKPOST_API_HOSTNAME,
      port: HTTPS_PORT,
      path: SPARKPOST_TRANSMISSION_API_ENDPOINT,
      method: "POST",
      headers: {
        Authorization: sparkpostToken,
        "Content-Type": "application/json",
      }
    };
  
    const commentSafe = escapeHtml(comment);
    const moderateUrl = getModerateUrl(
      siteDomain, title, path, id, date, name, url, commentSafe
    );
  
    let data = {
      options: {
        open_tracking: false,
        click_tracking: false,
      },
      recipients: [
        {
          address: {
            email: toEmail,
          },
        },
      ],
      content: {
        from: {
          email: fromEmail,
        },
        subject: getNotifyMailSubject(siteName, title),
        text: getNotifyMailText(name, email, url, comment, moderateUrl),
      },
    };
  
    try {
      return await doRequest(options, JSON.stringify(data));
    } catch (e) {
      console.error(`SparkPost create transmission call failed: ${e}`);
      throw e;
    }
  };



//   APPROVE EMAIL
const approveComment = async (
    githubToken,
    githubUser,
    githubRepo,
    netlifyToken,
    id,
    path,
    title,
    date,
    name,
    url,
    comment,
  ) => {
    try {
      let existingSha;
      let existingJson;
      let existingComments;
  
      try {
        const existingFile = await getExistingCommentsFile(
          githubToken, githubUser, githubRepo, path
        );
        existingSha = existingFile.sha;
        existingJson = getExistingJson(existingFile);
        existingComments = getExistingComments(existingJson);
      } catch (e) {
        existingSha = null;
        existingJson = {};
        existingComments = [];
      }
  
      const newComments = getNewComments(existingComments, date, name, url, comment);
      const newJson = getNewJson(existingJson, newComments);
  
      await putNewCommentsFile(
        githubToken, githubUser, githubRepo, path, title, date, name, newJson, existingSha
      );
  
      await purgeComment(id, netlifyToken);
  
      return { statusCode: 200, body: "Comment approved" };
    }
    catch (e) {
      return { statusCode: 400, body: "Failed to approve comment" };
    }
  };