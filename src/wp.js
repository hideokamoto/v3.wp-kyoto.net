const WPAPI = require("wpapi");
const endpoint = "https://api.wp-kyoto.net/wp-json";
const wp = new WPAPI({ endpoint });

export const PostNotFoundNumber = 0;
export const PostListLimit = 10;
export const PostListAdditional = 1;
/* eslint-disable arrow-body-style */
export const getPostList = (pager, lang) => {
  if (lang !== "undefined" && lang === "en") {
    return getEnglishPostList();
  }

  return new Promise((resolve, reject) => {
    wp
      .posts()
      .perPage(PostListLimit + PostListAdditional)
      .page(pager)
      .then(data => {
        if (data.length === PostNotFoundNumber) {
          reject(new Error("post not found"));
        }
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getEnglishPostList = () => {
  return new Promise((resolve, reject) => {
    wp
      .url(`${endpoint}/wp/v2/posts?filter[lang]=en&_embed`)
      .get()
      .then(data => {
        if (data.length === PostNotFoundNumber) {
          reject(new Error("post not found"));
        }
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getEnglishPostBySlug = slug => {
  return new Promise((resolve, reject) => {
    wp
      .url(`${endpoint}/wp/v2/posts?filter[lang]=en&_embed&slug=${slug}`)
      .get()
      .then(data => {
        if (data.length === PostNotFoundNumber) {
          reject(new Error("post not found"));
        }
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getPostBySlug = (slug, lang) => {
  if (lang !== "undefined" && lang === "en") {
    return getEnglishPostBySlug(slug);
  }

  return new Promise((resolve, reject) => {
    wp
      .posts()
      .slug(slug)
      .embed()
      .then(data => {
        if (data.length === PostNotFoundNumber) {
          reject(new Error("post not found"));
        }
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
/* eslint-enable arrow-body-style */
