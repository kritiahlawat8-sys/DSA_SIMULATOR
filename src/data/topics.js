export const topics = [
  {
    name: "Array",
    description:
      "An array is a collection of elements of the same type, stored one after another in memory. Every element has an index, starting from 0, so we can directly access any element using its index.",
    example:
      "Storing the marks of 5 students in one array: marks = [78, 85, 92, 66, 90]. Here marks[2] gives 92.",
    operations: [
      { name: "Traversal", info: "Visit every element of the array, one by one." },
      { name: "Insertion", info: "Add a new element at a given index. The elements after it move one step right." },
      { name: "Deletion", info: "Remove the element at a given index. The elements after it move one step left." },
      { name: "Updation", info: "Change the value stored at a given index." },
      {
        name: "Searching",
        info: "Find whether a value is present in the array, and at which index.",
        options: [
          { name: "Linear Search", info: "Check each element one by one until the required value is found." },
          { name: "Binary Search", info: "In a sorted array, keep dividing the array into halves to find the value quickly." },
        ],
      },
      {
        name: "Sorting",
        info: "Arrange the elements of the array in increasing or decreasing order.",
        options: [
          { name: "Bubble Sort", info: "Compare neighbouring elements and swap them if they are in the wrong order." },
          { name: "Selection Sort", info: "Find the smallest element and place it at the front, then repeat for the rest." },
          { name: "Insertion Sort", info: "Take one element at a time and insert it at its correct place in the sorted part." },
          { name: "Merge Sort", info: "Divide the array into halves, sort each half, and then merge them." },
          { name: "Quick Sort", info: "Choose a pivot element and place smaller elements on its left and larger on its right." },
        ],
      },
    ],
  },
  {
    name: "Stack",
    description:
      "A stack is a data structure in which elements are added and removed from only one end, called the top. It follows the LIFO (Last In, First Out) rule: the element added last is removed first.",
    example:
      "The undo option in a text editor. The last change you made is the first one to be undone.",
    operations: [
      { name: "Push", info: "Add an element on the top of the stack. If the stack is full, it is called overflow." },
      { name: "Pop", info: "Remove the top element of the stack. If the stack is empty, it is called underflow." },
      { name: "Peek", info: "See the top element without removing it." },
      { name: "isEmpty", info: "Check whether the stack has no elements." },
      { name: "isFull", info: "Check whether the stack has no space left." },
    ],
  },
  {
    name: "Queue",
    description:
      "A queue is a data structure in which elements are added at one end, called the rear, and removed from the other end, called the front. It follows the FIFO (First In, First Out) rule: the element added first is removed first.",
    example:
      "Printer jobs. The document sent first to the printer is printed first.",
    operations: [
      { name: "Enqueue", info: "Add an element at the rear of the queue. If the queue is full, it is called overflow." },
      { name: "Dequeue", info: "Remove the element from the front of the queue. If the queue is empty, it is called underflow." },
      { name: "Front", info: "See the front element without removing it." },
      { name: "isEmpty", info: "Check whether the queue has no elements." },
      { name: "isFull", info: "Check whether the queue has no space left." },
    ],
  },
  {
    name: "Linked List",
    description:
      "A linked list is a collection of nodes connected to each other. Each node has two parts: the data, and a pointer that stores the address of the next node. The first node is called the head. Unlike an array, the nodes need not be stored side by side in memory.",
    example:
      "A music playlist where each song is linked to the next song.",
    operations: [
      { name: "Insertion at Beginning", info: "Add a new node at the start. It becomes the new head." },
      { name: "Insertion at End", info: "Add a new node after the last node." },
      { name: "Insertion at Position", info: "Add a new node at a given position by changing the nearby pointers." },
      { name: "Deletion", info: "Remove a node and connect the previous node to the next node." },
      { name: "Traversal", info: "Visit every node, starting from the head till the end." },
      { name: "Search", info: "Move through the list to find a node with a given value." },
    ],
  },
  {
    name: "Binary Tree",
    description:
      "A binary tree is a data structure arranged in levels, like a tree. The top node is called the root, and every node can have at most two children: a left child and a right child. A node with no children is called a leaf.",
    example:
      "Folders and sub-folders in a computer. Binary Search Trees (BST) are also used to search data quickly.",
    operations: [
      { name: "Insertion", info: "Add a new node at its correct position in the tree." },
      { name: "Deletion", info: "Remove a node and rearrange the tree if needed." },
      { name: "Searching", info: "Find a node that has a given value." },
      { name: "Inorder Traversal", info: "Visit the left child, then the root, then the right child." },
      { name: "Preorder Traversal", info: "Visit the root, then the left child, then the right child." },
      { name: "Postorder Traversal", info: "Visit the left child, then the right child, then the root." },
    ],
  },
];