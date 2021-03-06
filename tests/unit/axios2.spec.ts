import axios from "axios";
import { flushPromises } from "@vue/test-utils";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue'
import Card from '@/components/Card.vue'

describe("UserList", () => {
  afterAll(() => {
    mock.restore();
  });
  beforeEach(() => {
    mock.reset();
  });

  it("loads users", async () => {
    mock
      .onGet("http://localhost:7000/api/menu/items")
      .reply(200, [{ name: "foo" }, { name: "bar" }, { name: "baz" }]);

    const wrapper = shallowMount(Home);
    await wrapper.vm.loadUsers();
    const listItems = wrapper.findAllComponents(Card);
    await flushPromises();
    expect(listItems).toHaveLength(3);
  });
});
