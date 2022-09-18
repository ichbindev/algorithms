/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:


	void push(int x) Pushes element x to the back of the queue.
	int pop() Removes the element from the front of the queue and returns it.
	int peek() Returns the element at the front of the queue.
	boolean empty() Returns true if the queue is empty, false otherwise.


Notes:


	You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
	Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
*/

class MyStack {
  stack: number[];

  constructor() {
      this.stack = [];
  }
  
  push(n: number): void {
      this.stack.push(n);
  }
  
  pop(): number {
      return this.stack.pop();
  }

  peek(): number {
      return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
      return this.stack.length === 0;
  }
}

class MyQueue {
  stack1: MyStack;
  stack2: MyStack;

  constructor() {
      this.stack1 = new MyStack();
      this.stack2 = new MyStack();
  }

  // O(n)
  // This method is O(n) so both peek and pop can be O(1)
  push(x: number): void {
      while (!this.stack2.empty()) {
          this.stack1.push(this.stack2.pop());
      }

      this.stack1.push(x);

      while (!this.stack1.empty()) {
          this.stack2.push(this.stack1.pop());
      }
  }

  pop(): number {
      return this.stack2.pop();
  }

  peek(): number {
      return this.stack2.peek();
  }

  empty(): boolean {
      return this.stack1.empty() && this.stack2.empty();
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/