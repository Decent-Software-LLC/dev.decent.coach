(function () {
  window.BASKETBALL_DRILLS = window.BASKETBALL_DRILLS || {};
  window.BASKETBALL_DRILLS["three-man-weave"] = {
    id: "three-man-weave",
    title: "Three-Man Weave",
    titleLines: ["Three-Man", "Weave"],
    status: "ready",
    categories: ["Passing", "Transition"],
    summary: "Three players pass in a weave pattern up the court, following each pass with a hard cut behind the receiver.",
    variations: [
      "Players can wait at the far end while the remaining groups come down the court, then return in the opposite direction. The next group may start when the previous group crosses half court.",
      "Specify the type of pass players must use."
    ],
    pointsOfEmphasis: [
      "Sprint down the court.",
      "Run wide and fill the lanes.",
      "Communicate and call for the ball.",
      "Pass in front of the moving receiver.",
      "Do not travel.",
      "Keep the ball off the floor."
    ],
    equipment: { players: 3, basketballs: 1 },
    court: {
      type: "full",
      asset: "assets/courts/basketball-fullcourt.svg",
      aspectRatio: "5 / 3",
      label: "Full court",
      startingEnd: "left"
    },
    players: [
      { id: "1", label: "1", team: "offense" },
      { id: "2", label: "2", team: "offense" },
      { id: "3", label: "3", team: "offense" }
    ],
    steps: [
      {
        title: "Start in three lanes",
        description: "Form three lines on the baseline. Player 1 begins in the middle with the ball.",
        focus: 5,
        ball: "1",
        positions: { "1": [5, 50], "2": [5, 29], "3": [5, 71] },
        movements: []
      },
      {
        title: "Pass and cut behind",
        description: "Pass to an outside lane, then sprint behind the player who received the pass.",
        focus: 29,
        ball: "2",
        positions: { "1": [25, 29], "2": [30, 50], "3": [27, 71] },
        movements: [{ player: "1", path: "curve-behind", offsetX: -58 }]
      },
      {
        title: "Keep the weave moving",
        description: "Repeat the pass-and-cut pattern, leading every runner into open space.",
        focus: 52,
        ball: "3",
        positions: { "1": [45, 29], "2": [47, 71], "3": [54, 50] },
        movements: [{ player: "2", path: "curve-behind", offsetX: -58 }]
      },
      {
        title: "Finish at the rim",
        description: "The receiver nearest the basket attacks. The other two form a rebounding triangle.",
        focus: 84,
        ball: "1",
        positions: { "1": [84, 50], "2": [78, 66], "3": [78, 34] },
        movements: [{ player: "3", path: "curve-behind", offsetX: -58 }]
      }
    ]
  };
}());
