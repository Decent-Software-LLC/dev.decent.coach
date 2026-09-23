(function () {
  window.BASKETBALL_DRILLS = window.BASKETBALL_DRILLS || {};
  window.BASKETBALL_DRILLS["close-out-drill"] = {
    id: "close-out-drill",
    title: "Close Out Drill",
    titleLines: ["Close Out", "Drill"],
    status: "ready",
    categories: ["Defense", "Footwork"],
    summary: "Defenders close out four perimeter players, react to a jab step, and recover before rotating to the next assignment.",
    equipment: { players: 6, basketballs: 0 },
    court: {
      type: "half",
      asset: "assets/courts/basketball-halfcourt.svg",
      aspectRatio: "1090.86 / 912.61",
      label: "Half court",
      startingEnd: "top"
    },
    players: [
      { id: "o1", label: "1", team: "offense" },
      { id: "o2", label: "2", team: "offense" },
      { id: "o3", label: "3", team: "offense" },
      { id: "o4", label: "4", team: "offense" },
      { id: "d1", label: "X1", team: "defense" },
      { id: "d2", label: "X2", team: "defense" }
    ],
    steps: [
      {
        title: "Set the four spots",
        description: "Place four offensive players around the three-point line. Defenders form a line underneath the basket; no ball is used.",
        focus: 50,
        ball: null,
        positions: { o1: [17, 60], o2: [32, 40], o3: [68, 40], o4: [83, 60], d1: [50, 27], d2: [50, 17] },
        movements: []
      },
      {
        title: "Close out player 1",
        description: "X1 sprints toward Player 1, arrives under control, and calls “ball” in a correct defensive stance.",
        focus: 35,
        ball: null,
        positions: { o1: [17, 60], o2: [32, 40], o3: [68, 40], o4: [83, 60], d1: [21, 56], d2: [50, 17] },
        movements: []
      },
      {
        title: "React to the jab",
        description: "Player 1 makes one offensive jab. X1 drop-steps in that direction and makes one quick defensive slide.",
        focus: 26,
        ball: null,
        positions: { o1: [13, 66], o2: [32, 40], o3: [68, 40], o4: [83, 60], d1: [17, 64], d2: [50, 17] },
        movements: []
      },
      {
        title: "Recover and rotate",
        description: "X1 retreats toward the basket and continues to Player 2. X2 begins the same closeout sequence with Player 1.",
        focus: 42,
        ball: null,
        positions: { o1: [17, 60], o2: [32, 40], o3: [68, 40], o4: [83, 60], d1: [35, 43], d2: [21, 56] },
        movements: []
      }
    ]
  };
}());
