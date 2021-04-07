const replacePath = ({ path }) => {
  if (path === `/`) return `home`;
  else {
    const wordsWithUnderscore = path.match(/\b(\w+)\b/g);
    const words = [];
    wordsWithUnderscore.forEach(item =>
      item.includes("_") ? words.push(...item.split("_")) : words.push(item)
    );

    return `${words.join("-")}-chart-covid-19-mda`;
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);

  page.path = replacePath(page);

  if (page.path !== oldPage.path) {
    deletePage(oldPage);
    createPage(page);
  }
};
