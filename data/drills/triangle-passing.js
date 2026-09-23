(function () {
  window.BASKETBALL_DRILLS = window.BASKETBALL_DRILLS || {};
  window.BASKETBALL_DRILLS["triangle-passing"] = {
    id: "triangle-passing",
    title: "Triangle Passing",
    titleLines: ["Triangle", "Passing"],
    status: "ready",
    categories: ["Passing", "Receiving"],
    summary: "Three half-court lines pass in sequence while receivers move to the ball and passers sprint to the end of the receiving line.",
    equipment: { players: 6, basketballs: 1 },
    court: {
      type: "half",
      asset: "assets/courts/basketball-halfcourt.svg",
      aspectRatio: "1090.86 / 912.61",
      label: "Half court",
      startingEnd: "top"
    },
    players: [
      { id: "p1", label: "1", team: "offense" },
      { id: "p2", label: "2", team: "offense" },
      { id: "p3", label: "3", team: "offense" },
      { id: "p4", label: "4", team: "offense" },
      { id: "p5", label: "5", team: "offense" },
      { id: "p6", label: "6", team: "offense" }
    ],
    steps: [
      {
        title: "Form three lines",
        description: "Use half-court. Form lines at both half-court corners and underneath the basket. Player 1 starts with the ball.",
        focus: 50,
        ball: "p1",
        positions: { p1: [17, 86], p2: [50, 25], p3: [83, 86], p4: [17, 95], p5: [50, 14], p6: [83, 95] },
        movements: []
      },
      {
        title: "Pass to the basket line",
        description: "Player 2 moves to the ball and receives from Player 1. Player 1 sprints to the end of Player 2’s line.",
        focus: 45,
        ball: "p2",
        positions: { p1: [50, 14], p2: [42, 48], p3: [83, 86], p4: [17, 86], p5: [50, 25], p6: [83, 95] },
        movements: []
      },
      {
        title: "Pass to the right corner",
        description: "Player 3 moves to the ball and receives from Player 2. Player 2 sprints to the end of the right-corner line.",
        focus: 58,
        ball: "p3",
        positions: { p1: [50, 14], p2: [83, 95], p3: [67, 68], p4: [17, 86], p5: [50, 25], p6: [83, 86] },
        movements: []
      },
      {
        title: "Complete the triangle",
        description: "Player 4 moves to the ball and receives from Player 3. Player 3 sprints to the end of the left-corner line.",
        focus: 42,
        ball: "p4",
        positions: { p1: [50, 14], p2: [83, 95], p3: [17, 95], p4: [33, 68], p5: [50, 25], p6: [83, 86] },
        movements: []
      }
    ]
  };
}());
