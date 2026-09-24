(function () {
  window.BASKETBALL_DRILLS = window.BASKETBALL_DRILLS || {};
  window.BASKETBALL_DRILLS["chill-drill"] = {
    id: "chill-drill",
    title: "Chill Drill",
    titleLines: ["Chill Drill"],
    status: "ready",
    categories: ["Dribbling", "Ball Handling"],
    summary: "A game-speed dribbling circuit combining inside-out moves, spins, retreat dribbles, crossovers, and a strong finish.",
    variations: [
      "Run the route in the opposite direction, beginning from the other corner.",
      "Change the moves along the route to create new ball-handling combinations."
    ],
    pointsOfEmphasis: [
      "Keep your head up and see the court.",
      "Stay in a low dribbling stance.",
      "Make every change of direction explosive and quick.",
      "Complete the route at game pace.",
      "Keep the dribble low, especially on crossovers."
    ],
    equipment: { players: 1, playersLabel: "All Players", basketballs: 1 },
    court: {
      type: "half",
      asset: "assets/courts/basketball-halfcourt.svg",
      aspectRatio: "1090.86 / 912.61",
      label: "Half court",
      startingEnd: "top"
    },
    players: [
      { id: "p1", label: "1", team: "offense" }
    ],
    steps: [
      {
        title: "Begin in the corner",
        description: "Line up in the corner. The first player starts in a low stance with the ball in the right hand and eyes up.",
        focus: 12,
        ball: "p1",
        positions: { p1: [90, 12] },
        movements: []
      },
      {
        title: "Attack with inside-out moves",
        description: "Advance up the sideline and execute two sharp inside-out dribbles, selling each move as a crossover before exploding forward.",
        focus: 42,
        ball: "p1",
        duration: 3400,
        positions: { p1: [90, 46] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [90, 12], offset: 0 }, { position: [86, 22], offset: 0.25 }, { position: [90, 31], offset: 0.5 }, { position: [86, 39], offset: 0.75 }, { position: [90, 46], offset: 1 }] }
        ]
      },
      {
        title: "Reverse spin",
        description: "Use a tight reverse spin to change direction and transfer the ball to the left hand without losing balance or vision.",
        focus: 72,
        ball: "p1",
        duration: 2400,
        positions: { p1: [87, 76] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [90, 46], offset: 0 }, { position: [91, 63], offset: 0.45 }, { position: [87, 76], offset: 1 }] }
        ]
      },
      {
        title: "Drive, then retreat",
        description: "Attack with the left hand, stop under control, and use a quick retreat dribble to create space from an imaginary defender.",
        focus: 76,
        ball: "p1",
        duration: 3200,
        positions: { p1: [72, 78] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [87, 76], offset: 0 }, { position: [59, 79], offset: 0.55 }, { position: [72, 78], offset: 1 }] }
        ]
      },
      {
        title: "Cross over low",
        description: "Execute a quick, low crossover and accelerate out of the move with the ball protected in the right hand.",
        focus: 75,
        ball: "p1",
        duration: 2600,
        positions: { p1: [47, 78] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [72, 78], offset: 0 }, { position: [65, 74], offset: 0.3 }, { position: [57, 82], offset: 0.55 }, { position: [47, 78], offset: 1 }] }
        ]
      },
      {
        title: "Sell the half spin",
        description: "Use a 180-degree half spin to fake the reverse, stay low, and continue with control when the defender reacts.",
        focus: 74,
        ball: "p1",
        duration: 2600,
        positions: { p1: [25, 78] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [47, 78], offset: 0 }, { position: [39, 74], offset: 0.35 }, { position: [34, 82], offset: 0.6 }, { position: [25, 78], offset: 1 }] }
        ]
      },
      {
        title: "Change direction behind the back",
        description: "Use a behind-the-back dribble to change direction while keeping the ball away from pressure and maintaining forward momentum.",
        focus: 61,
        ball: "p1",
        duration: 2800,
        positions: { p1: [36, 54] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [25, 78], offset: 0 }, { position: [18, 76], offset: 0.3 }, { position: [25, 66], offset: 0.58 }, { position: [36, 54], offset: 1 }] }
        ]
      },
      {
        title: "Hesitate and finish",
        description: "Use a hesitation and stutter step to freeze the defender, then explode to the basket and finish the lay-up at game speed.",
        focus: 25,
        ball: "p1",
        duration: 3200,
        positions: { p1: [50, 20] },
        movements: [
          { player: "p1", path: "curve-via", points: [{ position: [36, 54], offset: 0 }, { position: [39, 47], offset: 0.28 }, { position: [38, 43], offset: 0.45 }, { position: [45, 30], offset: 0.72 }, { position: [50, 20], offset: 1 }] }
        ]
      }
    ]
  };
}());
