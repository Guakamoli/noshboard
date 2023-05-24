// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[page].tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/auth.tsx";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/Button.tsx";
import * as $$1 from "./islands/Input.tsx";
import * as $$2 from "./islands/LatestTweetList.tsx";
import * as $$3 from "./islands/SettingInfoForm.tsx";
import * as $$4 from "./islands/SettingPaymentsForm.tsx";
import * as $$5 from "./islands/TweetList.tsx";

const manifest = {
  routes: {
    "./routes/[page].tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/auth.tsx": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/Button.tsx": $$0,
    "./islands/Input.tsx": $$1,
    "./islands/LatestTweetList.tsx": $$2,
    "./islands/SettingInfoForm.tsx": $$3,
    "./islands/SettingPaymentsForm.tsx": $$4,
    "./islands/TweetList.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;