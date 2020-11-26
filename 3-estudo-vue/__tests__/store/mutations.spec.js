import mutations from "../../src/store/mutations";

let state = {
  todoArray: []
};

describe("Mutations", () => {
  beforeAll(() => {
    state = {
      todoArray: [
        { id: "1", message: "Test message 1" },
        { id: "2", message: "Test message 2" }
      ],
      completedArray: [],
      destroyedArray: [],
    };
  });

  // addTask ==================================
  it("should add a new task (addTask)", () => {
    const payload = {
      id: "3",
      message: "Test message 3"
    };

    mutations.addTask(state, { payload });
    expect(state.todoArray.length).toBe(3);
  });

  // editTask ==================================
  it("should edit a task (editTask)", () => {
    const payload = {
      id: "2",
      message: "New test message 2"
    };

    mutations.editTask(state, { payload });
    expect(state.todoArray[1].message).toBe("New test message 2");
  });

  // completeTask ==================================
  it("should define a task as completed (completeTask)", () => {
    const payload = {
      id: "3"
    };

    mutations.completeTask(state, { payload });
    expect(state.todoArray.length).toBe(2);
    expect(state.completedArray.length).toBe(1);
    expect(state.completedArray[0]).toStrictEqual(
      {
        id: "3",
        message: "Test message 3"
      }
    );
  });

  // destroyTask ==================================
  it("should define a task as destroyed (destroyTask)", () => {
    const payload = {
      id: "2"
    };

    mutations.destroyTask(state, { payload });
    expect(state.todoArray.length).toBe(1);
    expect(state.destroyedArray.length).toBe(1);
    expect(state.destroyedArray[0]).toStrictEqual(
      {
        id: "2",
        message: "New test message 2"
      }
    );
  });
});