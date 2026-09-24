(function () {
  window.BASKETBALL_DRILLS = window.BASKETBALL_DRILLS || {};
  window.BASKETBALL_DRILLS["lay-up-and-rebounding-lines"] = {
    id: "lay-up-and-rebounding-lines",
    title: "Lay-up And Rebounding Lines",
    titleLines: ["Lay-up And", "Rebounding Lines"],
    status: "ready",
    categories: ["Lay-ups", "Rebounding", "Passing"],
    summary: "Two lines work at game speed as one player drives for a lay-up and the opposite line rebounds, outlets, and rotates.",
    variations: [
      "Run the drill from the opposite side of the court.",
      "Add more basketballs to increase the pace.",
      "Vary the type of lay-up players must finish."
    ],
    pointsOfEmphasis: [
      "Use correct lay-up form and make a hard, game-speed drive.",
      "Secure the rebound before the ball touches the floor.",
      "Protect the ball, take two strong dribbles, and deliver an accurate outlet pass.",
      "The next receiver should meet the pass while moving toward the basket."
    ],
    equipment: { players: 6, basketballs: 1 },
    court: {
      type: "half",
      asset: "assets/courts/basketball-halfcourt.svg",
      aspectRatio: "1090.86 / 912.61",
      label: "Half court",
      startingEnd: "top",
      overlay: {
        asset: "assets/basketball-hoop.png",
        alt: "Aerial basketball hoop and backboard",
        left: 43,
        top: 12,
        width: 14
      }
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
        title: "Form two lines",
        description: "Form the lay-up line outside the three-point line near one sideline and the rebounding line on the opposite side. Player 1 begins with the ball.",
        focus: 50,
        ball: "p1",
        positions: { p1: [20, 79], p2: [14, 88], p3: [8, 97], p4: [78, 72], p5: [84, 81], p6: [90, 90] },
        movements: []
      },
      {
        title: "Drive and anticipate",
        description: "Player 1 drives to the first hash mark while Player 4 moves to the third hash mark. Player 1 finishes over the rim and Player 4 anticipates the rebound.",
        focus: 48,
        ball: "p4",
        ballPosition: [61, 31],
        ballArrival: 0.4,
        duration: 4400,
        positions: { p1: [37, 21], p2: [14, 88], p3: [8, 97], p4: [64, 34], p5: [84, 81], p6: [90, 90] },
        ballPath: [
          { position: [20, 79], offset: 0, layer: "over" },
          { position: [39.5, 17], offset: 0.4, layer: "over" },
          { position: [45.5, 14], offset: 0.57, layer: "over" },
          { position: [45.5, 14], offset: 0.67, layer: "over" },
          { position: [45.5, 14], offset: 0.71, layer: "under" },
          { position: [61, 31], offset: 1, layer: "over" }
        ],
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [20, 79], offset: 0 }, { position: [37, 21], offset: 0.4 }, { position: [37, 21], offset: 1 }] }
        ]
      },
      {
        title: "Outlet and rotate",
        description: "Player 4 passes to Player 2 moving toward the ball while Player 1 follows the baseline and sideline to the end of the rebounding line.",
        focus: 42,
        ball: "p2",
        ballPosition: [22, 68],
        ballArrival: 0.45,
        duration: 3600,
        positions: { p1: [90, 90], p2: [20, 71], p3: [8, 97], p4: [64, 34], p5: [78, 72], p6: [84, 81] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [37, 21], offset: 0 }, { position: [37, 6], offset: 0.2 }, { position: [90, 6], offset: 0.52 }, { position: [90, 90], offset: 1 }] }
        ]
      },
      {
        title: "Rebound and outlet",
        description: "Player 4 follows the baseline and left sideline to join the lay-up line while Player 2 advances to the first hash mark with the ball and Player 5 moves to the third hash mark.",
        focus: 46,
        ball: "p2",
        ballPosition: [39.5, 17],
        duration: 3000,
        positions: { p1: [90, 90], p2: [37, 21], p3: [14, 88], p4: [8, 97], p5: [64, 34], p6: [84, 81] },
        ballPath: [
          { position: [22, 68], offset: 0, layer: "over" },
          { position: [39.5, 17], offset: 1, layer: "over" }
        ],
        movements: [
          { player: "p2", path: "curve-via", points: [{ position: [20, 71], offset: 0 }, { position: [37, 21], offset: 1 }] },
          { player: "p4", path: "curve-via", points: [{ position: [64, 34], offset: 0 }, { position: [64, 6], offset: 0.18 }, { position: [8, 6], offset: 0.55 }, { position: [8, 97], offset: 1 }] },
          { player: "p5", path: "curve-via", points: [{ position: [78, 72], offset: 0 }, { position: [64, 34], offset: 1 }] }
        ]
      }
    ]
  };
}());
