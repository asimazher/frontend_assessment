export const getComments = async () => {
    return [
      {
        id: "1",
        body: "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
        username: "Maria",
        userId: "1",
        imgsrc:"user1",
        parentId: null,
        like:"1",
        createdAt: "2023-09-05T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
        username: "Alex Benjamin",
        userId: "2",
        imgsrc:"user2",
        parentId: null,
        like:"1",
        createdAt: "2023-09-05T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
        username: "Tania",
        userId: "3",
        imgsrc:"user3",
        parentId: null,
        like:"0",
        createdAt: "2023-09-05T23:00:33.010+02:00",
      }
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      username: "John Doe",
      userId: "4",
      imgsrc:"user4",
      parentId,
      like:"0",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };
  