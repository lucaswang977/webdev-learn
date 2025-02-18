/**
 * Definition for singly-linked list.
 **/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function headToList(head: number[]): ListNode | null {
  if (head && head.length > 0) {
    const headList = new ListNode(head[0]);
    let p = headList;
    let i = 1;
    while (i < head.length) {
      const node = new ListNode(head[i]);
      p.next = node;
      p = p.next;
      i++;
    }

    return headList;
  }

  return null;
}

function outputList(head: ListNode | null) {
  const nodes: number[] = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  console.log(nodes.join(","));
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  // 1,2,3,4,5
  // oddIndex = [1,3,5]
  // evenIndex = [2,4]
  // insertNode = 3
  // insertNodePrev = 1
  // insertNodeNext = 2
  // 1,3,2,4,5
  // insertNode = 5
  // insertNodePrev = 3
  // insertNodeNext = 2
  // 1,3,5,2,4
  let i = 1;
  let insertNodePrev: ListNode | null = head;
  let insertNodeNext: ListNode | null = head.next;
  let ptr: ListNode | null = head.next;

  while (ptr) {
    if (i % 2 === 0 && insertNodePrev && insertNodeNext) {
      insertNodePrev.next = ptr;
      insertNodePrev = ptr;

      const temp = ptr.next;
      ptr.next = insertNodeNext;
      insertNodeNext.next = temp;

      ptr = insertNodeNext;
    }
    i++;
    if (ptr) ptr = ptr.next;
    console.log(ptr, i);
    outputList(head);
  }
}

export default function testQuiz() {
  let head: number[], headList;

  // [1,3,5,2,4]
  head = [1, 2, 3, 4, 5];
  headList = headToList(head);
  console.log(oddEvenList(headList));

  // [2,3,6,7,1,5,4]
  head = [2, 1, 3, 5, 6, 4, 7];
  headList = headToList(head);
  console.log(oddEvenList(headList));
}
