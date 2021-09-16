import "@testing-library/jest-dom/extend-expect";
import { setLogger } from "react-query";
import { queryCache } from "./src/test-utils";

setLogger({
  error: () => {},
});

beforeEach(() => {
  queryCache.clear();
});
