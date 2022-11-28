declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_API_KEY;
    readonly MICROCMS_SERVICE_DOMAIN;
    readonly TWITTER_API_KEY;
    readonly TWITTER_API_KEY_SECRET;
    readonly TWITTER_BEARER_TOKEN;
    readonly TWITTER_USER_ID;
    readonly GITHUB_TOKEN;
    readonly GITHUB_USER_NAME;
    readonly NEXT_PUBLIC_BASE_URL;
  }
}
