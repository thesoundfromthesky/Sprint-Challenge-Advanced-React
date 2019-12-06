import { act } from "react-test-renderer";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";
import { wait } from "@testing-library/react";
import axios from "axios";

describe("useFetch", () => {
  const url = "http://localhost:5000/api/players";
  let hooks;

  beforeEach(() => {
    axios.get = jest.fn(() =>
      Promise.resolve({
        data: [
          { name: "Alex Morgan", country: "United States", searches: 100 },
          { name: "Megan Rapinoe", country: "United States", searches: 99 },
          { name: "Marta", country: "Brazil", searches: 18 }
        ]
      })
    );
  });

  it("fetch", async () => {
    await act(async () => {
      hooks = renderHook(() => useFetch(url));
      await hooks.waitForNextUpdate();
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
