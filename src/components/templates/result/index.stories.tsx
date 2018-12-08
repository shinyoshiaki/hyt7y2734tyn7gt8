import * as React from "react";

import { storiesOf } from "@storybook/react";

import Component, { IResultTempProps } from ".";
import { headerOrgStory } from "../../organisms/header/index.stories";
import { listResultBitStory } from "../../molecules/listResultBit/index.stories";
import { detailWorkerStory } from "../../molecules/detailWorker/index.stories";

export const resultStory: IResultTempProps = {
  ...Object.assign({}, headerOrgStory, listResultBitStory, detailWorkerStory)
};

storiesOf("templates", module).add("result", () => <Component {...resultStory} />);
