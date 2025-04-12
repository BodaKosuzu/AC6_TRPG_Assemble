export const openKey = $state({
  isOpen: 'head',
});

export const inputData = $state({
  codeName: '',
  comaSum: '0',
  level: '10',
  selectedSkills: [] as string[],
});

export const selectedParts = $state({
  head: 0,
  core: 0,
  arms: 0,
  legs: 0,
  fcs: 0,
  generator: 0,
  booster: 0,
  weaponR: '0',
  weaponL: '0',
  shoulderR: '0',
  shoulderL: '0',
  osType: 0,
});

export const partsList = $state.raw({
  head: [
    {
      name: 'DF-HD-08 TIAN-QIANG',
      level: 10,
      price: 0,
      againstSystemFailure: 0,
      search: 1,
      hacking: 2,
    },
    {
      name: 'HC-2000 FINDER EYE',
      level: 10,
      price: 0,
      againstSystemFailure: 2,
      search: 1,
      hacking: 1,
    },
    {
      name: 'LAMMERGEIER/44F',
      level: 10,
      price: 0,
      againstSystemFailure: 0,
      search: 3,
      hacking: 0,
    },
    {
      name: 'HD-011 MELANDER',
      level: 10,
      price: 1,
      againstSystemFailure: 0,
      search: 0,
      hacking: 4,
    },
    {
      name: 'NACHTREIHER/44E',
      level: 10,
      price: 1,
      againstSystemFailure: 2,
      search: 0,
      hacking: 3,
    },
    {
      name: 'HD-012 MELANDER C3',
      level: 10,
      price: 2,
      againstSystemFailure: 2,
      search: 3,
      hacking: 1,
    },
    {
      name: 'VP-44S',
      level: 10,
      price: 2,
      againstSystemFailure: 2,
      search: 2,
      hacking: 2,
    },
    {
      name: 'AH-J-124 BASHO',
      level: 20,
      price: 2,
      againstSystemFailure: 4,
      search: 1,
      hacking: 2,
    },
    {
      name: 'KASUAR/44Z',
      level: 20,
      price: 2,
      againstSystemFailure: 0,
      search: 5,
      hacking: 0,
    },
    {
      name: 'EL-TH-10 FIRMEZA',
      level: 20,
      price: 3,
      againstSystemFailure: 0,
      search: 3,
      hacking: 3,
    },
    {
      name: 'HC-3000 WRECKER',
      level: 30,
      price: 3,
      againstSystemFailure: 2,
      search: 0,
      hacking: 5,
    },
    {
      name: 'VE-44A',
      level: 30,
      price: 3,
      againstSystemFailure: 4,
      search: 4,
      hacking: 0,
    },
    {
      name: 'HD-033M VERPILL',
      level: 30,
      price: 4,
      againstSystemFailure: 4,
      search: 3,
      hacking: 2,
    },
    {
      name: 'IB-C03H:HAL 826',
      level: 40,
      price: 4,
      againstSystemFailure: 2,
      search: 2,
      hacking: 4,
    },
    {
      name: 'VE-44B',
      level: 40,
      price: 4,
      againstSystemFailure: 6,
      search: 2,
      hacking: 2,
    },
    {
      name: 'EL-PH-00 ALBA',
      level: 40,
      price: 5,
      againstSystemFailure: 0,
      search: 4,
      hacking: 4,
    },
    {
      name: '20-082 MIND BETA',
      level: 50,
      price: 4,
      againstSystemFailure: 2,
      search: 4,
      hacking: 2,
    },
    {
      name: 'IA-C01H:EPHEMERA',
      level: 50,
      price: 5,
      againstSystemFailure: 4,
      search: 2,
      hacking: 4,
    },
    {
      name: 'AH-J-124/RC JAILBREAK',
      level: 50,
      price: 5,
      againstSystemFailure: 8,
      search: 2,
      hacking: 2,
    },
    {
      name: 'HC-2000/BC SHADE EYE',
      level: 50,
      price: 5,
      againstSystemFailure: 0,
      search: 6,
      hacking: 2,
    },
    {
      name: 'HS-5000 APPETIZER',
      level: 50,
      price: 6,
      againstSystemFailure: 2,
      search: 2,
      hacking: 6,
    },
    {
      name: 'VP-44D',
      level: 50,
      price: 6,
      againstSystemFailure: 6,
      search: 3,
      hacking: 3,
    },
    {
      name: '20-081 MIND ALPHA',
      level: 50,
      price: 7,
      againstSystemFailure: 4,
      search: 4,
      hacking: 4,
    },
  ],
  core: [
    {
      name: 'CC-2000 ORBITER',
      level: 10,
      price: 0,
      ap: {
        point: 50,
        line: 3,
      },
      limits: {
        weight: 0,
        energy: 0,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'VP-40S',
      level: 10,
      price: 0,
      ap: {
        point: 60,
        line: 2,
      },
      limits: {
        weight: -1,
        energy: 1,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'LAMMERGEIER/40F',
      level: 10,
      price: 1,
      ap: {
        point: 50,
        line: 2,
      },
      limits: {
        weight: -1,
        energy: 1,
      },
      energyDice: {
        max: -1,
        tarnStart: 1,
        onesStart: 1,
      },
    },
    {
      name: 'NACHTREIHER/40E',
      level: 10,
      price: 1,
      ap: {
        point: 70,
        line: 1,
      },
      limits: {
        weight: -1,
        energy: 0,
      },
      energyDice: {
        max: 1,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'BD-011 MELANDER',
      level: 10,
      price: 2,
      ap: {
        point: 60,
        line: 3,
      },
      limits: {
        weight: 0,
        energy: 0,
      },
      energyDice: {
        max: 0,
        tarnStart: 1,
        onesStart: -1,
      },
    },
    {
      name: 'BD-012 MELANDER C3',
      level: 10,
      price: 2,
      ap: {
        point: 70,
        line: 2,
      },
      limits: {
        weight: 0,
        energy: 0,
      },
      energyDice: {
        max: 0,
        tarnStart: -1,
        onesStart: 1,
      },
    },
    {
      name: 'DF-BD-08 TIAN-QIANG',
      level: 10,
      price: 3,
      ap: {
        point: 80,
        line: 3,
      },
      limits: {
        weight: -1,
        energy: -1,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'AC-J-120 BASHO',
      level: 20,
      price: 3,
      ap: {
        point: 60,
        line: 4,
      },
      limits: {
        weight: 0,
        energy: -1,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'EL-TC-10 FIRMEZA',
      level: 20,
      price: 4,
      ap: {
        point: 40,
        line: 3,
      },
      limits: {
        weight: 0,
        energy: 0,
      },
      energyDice: {
        max: 1,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'CC-3000 WRECKER',
      level: 30,
      price: 5,
      ap: {
        point: 80,
        line: 1,
      },
      limits: {
        weight: 0,
        energy: 0,
      },
      energyDice: {
        max: 0,
        tarnStart: 1,
        onesStart: 0,
      },
    },
    {
      name: '07-061 MIND ALPHA',
      level: 30,
      price: 6,
      ap: {
        point: 50,
        line: 4,
      },
      limits: {
        weight: 1,
        energy: 0,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'VE-40A',
      level: 40,
      price: 7,
      ap: {
        point: 80,
        line: 2,
      },
      limits: {
        weight: 0,
        energy: 0,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 1,
      },
    },
    {
      name: 'IA-C01C:EPHEMERA',
      level: 40,
      price: 8,
      ap: {
        point: 60,
        line: 4,
      },
      limits: {
        weight: -1,
        energy: 0,
      },
      energyDice: {
        max: 1,
        tarnStart: 1,
        onesStart: 0,
      },
    },
    {
      name: 'EL-PC-00 ALBA',
      level: 50,
      price: 9,
      ap: {
        point: 70,
        line: 3,
      },
      limits: {
        weight: -1,
        energy: 1,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 1,
      },
    },
    {
      name: 'IB-C03C:HAL 826',
      level: 50,
      price: 9,
      ap: {
        point: 40,
        line: 4,
      },
      limits: {
        weight: 0,
        energy: 1,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 1,
      },
    },
    {
      name: 'AC-J-120/RC JAILBREAK',
      level: 50,
      price: 10,
      ap: {
        point: 70,
        line: 4,
      },
      limits: {
        weight: 1,
        energy: 1,
      },
      energyDice: {
        max: -1,
        tarnStart: 0,
        onesStart: 0,
      },
    },
    {
      name: 'CS-5000 MAIN DISH',
      level: 50,
      price: 11,
      ap: {
        point: 80,
        line: 4,
      },
      limits: {
        weight: 1,
        energy: -2,
      },
      energyDice: {
        max: 0,
        tarnStart: 0,
        onesStart: 0,
      },
    },
  ],
  arms: [
    {
      name: 'AC-2000 TOOL ARM',
      level: 10,
      price: 0,
      ap: {
        point: 50,
        line: 2,
      },
      power: {
        closeRange: 0,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'NACHTREIHER/46E',
      level: 10,
      price: 0,
      ap: {
        point: 50,
        line: 1,
      },
      power: {
        closeRange: 0,
        handGunShotGun: 5,
        rifleMacineGun: 5,
        bgl: 0,
        missileCannon: -5,
        other: -5,
      },
    },
    {
      name: 'LAMMERGEIER/46F',
      level: 10,
      price: 1,
      ap: {
        point: 30,
        line: 3,
      },
      power: {
        closeRange: 5,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'VP-46S',
      level: 10,
      price: 1,
      ap: {
        point: 40,
        line: 3,
      },
      power: {
        closeRange: 5,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: -5,
        other: -5,
      },
    },
    {
      name: 'AR-012 MELANDER C3',
      level: 10,
      price: 2,
      ap: {
        point: 40,
        line: 2,
      },
      power: {
        closeRange: 0,
        handGunShotGun: 5,
        rifleMacineGun: 0,
        bgl: -5,
        missileCannon: 5,
        other: 0,
      },
    },
    {
      name: 'DF-AR-08 TIAN-QIANG',
      level: 10,
      price: 2,
      ap: {
        point: 70,
        line: 1,
      },
      power: {
        closeRange: 5,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'AR-011 MELANDER',
      level: 10,
      price: 3,
      ap: {
        point: 30,
        line: 3,
      },
      power: {
        closeRange: 0,
        handGunShotGun: 5,
        rifleMacineGun: 5,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: '04-101 MIND ALPHA',
      level: 20,
      price: 4,
      ap: {
        point: 50,
        line: 3,
      },
      power: {
        closeRange: 0,
        handGunShotGun: 0,
        rifleMacineGun: -5,
        bgl: 0,
        missileCannon: 0,
        other: 5,
      },
    },
    {
      name: 'EL-TA-10 FIRMEZA',
      level: 20,
      price: 5,
      ap: {
        point: 40,
        line: 3,
      },
      power: {
        closeRange: 5,
        handGunShotGun: 0,
        rifleMacineGun: 5,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'DF-AR-09 TITAN-LAO',
      level: 20,
      price: 6,
      ap: {
        point: 70,
        line: 3,
      },
      power: {
        closeRange: -5,
        handGunShotGun: -5,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: -5,
        other: -5,
      },
    },
    {
      name: 'AC-3000 WRECKER',
      level: 30,
      price: 4,
      ap: {
        point: 60,
        line: 2,
      },
      power: {
        closeRange: -5,
        handGunShotGun: -5,
        rifleMacineGun: -5,
        bgl: 10,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'AA-J-123 BASHO',
      level: 30,
      price: 5,
      ap: {
        point: 80,
        line: 1,
      },
      power: {
        closeRange: 10,
        handGunShotGun: 0,
        rifleMacineGun: -5,
        bgl: 0,
        missileCannon: -5,
        other: 0,
      },
    },
    {
      name: 'IA-C01A:EPHEMERA',
      level: 40,
      price: 7,
      ap: {
        point: 60,
        line: 3,
      },
      power: {
        closeRange: 0,
        handGunShotGun: -5,
        rifleMacineGun: 0,
        bgl: 5,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'VE-46A',
      level: 40,
      price: 8,
      ap: {
        point: 50,
        line: 3,
      },
      power: {
        closeRange: -5,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 5,
        missileCannon: 10,
        other: -5,
      },
    },
    {
      name: 'AA-J-123/RC JAILBREAK',
      level: 50,
      price: 6,
      ap: {
        point: 60,
        line: 3,
      },
      power: {
        closeRange: -5,
        handGunShotGun: -5,
        rifleMacineGun: -5,
        bgl: -5,
        missileCannon: -5,
        other: 10,
      },
    },
    {
      name: 'AS-5000 SALAD',
      level: 50,
      price: 8,
      ap: {
        point: 50,
        line: 3,
      },
      power: {
        closeRange: 5,
        handGunShotGun: 0,
        rifleMacineGun: 5,
        bgl: 0,
        missileCannon: 5,
        other: 0,
      },
    },
    {
      name: 'EL-PA-00 ALBA',
      level: 50,
      price: 9,
      ap: {
        point: 50,
        line: 3,
      },
      power: {
        closeRange: -5,
        handGunShotGun: 0,
        rifleMacineGun: 10,
        bgl: 0,
        missileCannon: 0,
        other: 5,
      },
    },
    {
      name: 'VP-46D',
      level: 50,
      price: 10,
      ap: {
        point: 50,
        line: 2,
      },
      power: {
        closeRange: 5,
        handGunShotGun: 5,
        rifleMacineGun: 5,
        bgl: 5,
        missileCannon: 5,
        other: 0,
      },
    },
    {
      name: 'IB-C03A:HAL 826',
      level: 50,
      price: 11,
      ap: {
        point: 70,
        line: 2,
      },
      power: {
        closeRange: 0,
        handGunShotGun: 10,
        rifleMacineGun: 0,
        bgl: -5,
        missileCannon: 5,
        other: 0,
      },
    },
  ],
  legs: [
    {
      name: '2C-2000 CRAWLER',
      level: 10,
      price: 0,
      ap: {
        point: 40,
        line: 3,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 0,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'LG-011 MELANDER',
      level: 10,
      price: 1,
      ap: {
        point: 50,
        line: 2,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 1,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 10,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'NACHTREIHER/42E',
      level: 10,
      price: 1,
      ap: {
        point: 50,
        line: 2,
      },
      type: '0',
      limitWeight: 2,
      maneuver: 3,
      move: 3,
      avoidance: 2,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'DF-LG-08 TIAN-QIANG',
      level: 10,
      price: 2,
      ap: {
        point: 70,
        line: 2,
      },
      type: '0',
      limitWeight: 4,
      maneuver: 0,
      move: 4,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'LG-012 MELANDER C3',
      level: 10,
      price: 3,
      ap: {
        point: 60,
        line: 2,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 2,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'VP-422',
      level: 10,
      price: 3,
      ap: {
        point: 50,
        line: 3,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 1,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 10,
      },
    },
    {
      name: '06-041 MIND ALPHA',
      level: 20,
      price: 3,
      ap: {
        point: 60,
        line: 3,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 1,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'EL-TL-10 FIRMEZA',
      level: 20,
      price: 4,
      ap: {
        point: 50,
        line: 4,
      },
      type: '0',
      limitWeight: 2,
      maneuver: 4,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'AL-J-121 BASHO',
      level: 30,
      price: 5,
      ap: {
        point: 70,
        line: 3,
      },
      type: '0',
      limitWeight: 4,
      maneuver: 1,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 0,
        explosion: 10,
        energy: 0,
      },
    },
    {
      name: '2C-3000 WRECKER',
      level: 30,
      price: 6,
      ap: {
        point: 80,
        line: 2,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 2,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'IA-C01L:EPHEMERA',
      level: 40,
      price: 6,
      ap: {
        point: 80,
        line: 1,
      },
      type: '0',
      limitWeight: 2,
      maneuver: 3,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 10,
        explosion: 0,
        energy: 10,
      },
    },
    {
      name: 'VE-42A',
      level: 40,
      price: 7,
      ap: {
        point: 60,
        line: 4,
      },
      type: '0',
      limitWeight: 4,
      maneuver: 0,
      move: 3,
      avoidance: 5,
      defence: {
        bullet: 0,
        explosion: 10,
        energy: 10,
      },
    },
    {
      name: 'AL-J-121/RC JAILHBREAK',
      level: 50,
      price: 5,
      ap: {
        point: 70,
        line: 4,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 0,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 0,
        explosion: 10,
        energy: 0,
      },
    },
    {
      name: 'IB-C03L:HAL 826',
      level: 50,
      price: 8,
      ap: {
        point: 70,
        line: 3,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 3,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: '2S-5000 DESSERT',
      level: 50,
      price: 9,
      ap: {
        point: 80,
        line: 2,
      },
      type: '0',
      limitWeight: 5,
      maneuver: 3,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 10,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'EL-PL00 ALBA',
      level: 50,
      price: 10,
      ap: {
        point: 50,
        line: 4,
      },
      type: '0',
      limitWeight: 3,
      maneuver: 4,
      move: 3,
      avoidance: 2,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'KASUAR/42Z',
      level: 10,
      price: 0,
      ap: {
        point: 40,
        line: 2,
      },
      type: '1',
      limitWeight: 1,
      maneuver: 3,
      move: 2,
      avoidance: 2,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: '06-042 MIND BETA',
      level: 20,
      price: 3,
      ap: {
        point: 40,
        line: 4,
      },
      type: '1',
      limitWeight: 2,
      maneuver: 4,
      move: 3,
      avoidance: 3,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'RC-2000 SPRING CHICKEN',
      level: 30,
      price: 6,
      ap: {
        point: 60,
        line: 3,
      },
      type: '1',
      limitWeight: 3,
      maneuver: 5,
      move: 4,
      avoidance: 3,
      defence: {
        bullet: 10,
        explosion: 0,
        energy: 0,
      },
    },
    {
      name: 'LAMMERGEIER/42F',
      level: 10,
      price: 0,
      ap: {
        point: 40,
        line: 4,
      },
      type: '2',
      limitWeight: 3,
      maneuver: 2,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 10,
      },
    },
    {
      name: 'VP-424',
      level: 20,
      price: 1,
      ap: {
        point: 50,
        line: 3,
      },
      type: '2',
      limitWeight: 4,
      maneuver: 2,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 0,
        explosion: 0,
        energy: 10,
      },
    },
    {
      name: 'LG-033M VERRILL',
      level: 40,
      price: 6,
      ap: {
        point: 50,
        line: 4,
      },
      type: '2',
      limitWeight: 4,
      maneuver: 2,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 10,
        explosion: 0,
        energy: 10,
      },
    },
    {
      name: 'EL-TL-11 FORTALEZA',
      level: 10,
      price: 1,
      ap: {
        point: 50,
        line: 3,
      },
      type: '3',
      limitWeight: 4,
      maneuver: 2,
      move: 4,
      avoidance: 4,
      defence: {
        bullet: 0,
        explosion: 10,
        energy: 0,
      },
    },
    {
      name: 'LG-022T BORNEMISSZA',
      level: 10,
      price: 1,
      ap: {
        point: 80,
        line: 2,
      },
      type: '3',
      limitWeight: 5,
      maneuver: 0,
      move: 5,
      avoidance: 6,
      defence: {
        bullet: 10,
        explosion: 10,
        energy: 10,
      },
    },
    {
      name: 'VE-42B',
      level: 50,
      price: 8,
      ap: {
        point: 70,
        line: 4,
      },
      type: '3',
      limitWeight: 4,
      maneuver: 1,
      move: 4,
      avoidance: 5,
      defence: {
        bullet: 0,
        explosion: 10,
        energy: 10,
      },
    },
  ],
  fcs: [
    {
      name: 'FCS-G1/P01',
      level: 10,
      price: 0,
      power: {
        closeRange: 0,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'FCS-G2/P10LT',
      level: 10,
      price: 1,
      power: {
        closeRange: 0,
        handGunShotGun: -5,
        rifleMacineGun: 0,
        bgl: 0,
        missileCannon: 5,
        other: 0,
      },
    },
    {
      name: 'FC-006 ABBOT',
      level: 10,
      price: 2,
      power: {
        closeRange: 5,
        handGunShotGun: 5,
        rifleMacineGun: 0,
        bgl: -5,
        missileCannon: -5,
        other: 0,
      },
    },
    {
      name: 'FCS-G2/P05',
      level: 20,
      price: 3,
      power: {
        closeRange: 0,
        handGunShotGun: 0,
        rifleMacineGun: 5,
        bgl: 0,
        missileCannon: 5,
        other: -5,
      },
    },
    {
      name: 'FC-008 TALBOT',
      level: 20,
      price: 4,
      power: {
        closeRange: 0,
        handGunShotGun: 5,
        rifleMacineGun: 5,
        bgl: 0,
        missileCannon: 0,
        other: 0,
      },
    },
    {
      name: 'FCS-G2/P12SML',
      level: 30,
      price: 5,
      power: {
        closeRange: 0,
        handGunShotGun: -5,
        rifleMacineGun: 5,
        bgl: 5,
        missileCannon: 5,
        other: 0,
      },
    },
    {
      name: 'VE-21A',
      level: 30,
      price: 6,
      power: {
        closeRange: 0,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: 5,
        missileCannon: 5,
        other: 5,
      },
    },
    {
      name: 'VE-21B',
      level: 40,
      price: 7,
      power: {
        closeRange: -5,
        handGunShotGun: 0,
        rifleMacineGun: 5,
        bgl: 5,
        missileCannon: 5,
        other: 5,
      },
    },
    {
      name: 'IA-C01F:OCELLUS',
      level: 50,
      price: 5,
      power: {
        closeRange: 10,
        handGunShotGun: 0,
        rifleMacineGun: 0,
        bgl: -5,
        missileCannon: -5,
        other: 5,
      },
    },
    {
      name: 'IB-C03F:WLT 001',
      level: 50,
      price: 6,
      power: {
        closeRange: 0,
        handGunShotGun: 0,
        rifleMacineGun: 5,
        bgl: 5,
        missileCannon: 5,
        other: 0,
      },
    },
  ],
  generator: [
    {
      name: 'DF-GN-02 LING-TAI',
      level: 10,
      price: 0,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 5,
        tarnStart: 3,
        onesStart: 2,
      },
    },
    {
      name: 'AG-J098 JOSO',
      level: 10,
      price: 1,
      limits: {
        energy: 2,
      },
      energyDice: {
        max: 5,
        tarnStart: 4,
        onesStart: 2,
      },
    },
    {
      name: 'DF-GN-06 MING-TANG',
      level: 10,
      price: 2,
      limits: {
        energy: 4,
      },
      energyDice: {
        max: 4,
        tarnStart: 3,
        onesStart: 3,
      },
    },
    {
      name: 'VP-20S',
      level: 10,
      price: 3,
      limits: {
        energy: 4,
      },
      energyDice: {
        max: 5,
        tarnStart: 3,
        onesStart: 2,
      },
    },
    {
      name: 'AG-E-013 YABA',
      level: 20,
      price: 4,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 5,
        tarnStart: 3,
        onesStart: 3,
      },
    },
    {
      name: 'VP-20D',
      level: 20,
      price: 5,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 6,
        tarnStart: 3,
        onesStart: 2,
      },
    },
    {
      name: 'VE-20C',
      level: 30,
      price: 5,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 6,
        tarnStart: 4,
        onesStart: 1,
      },
    },
    {
      name: 'VP-20C',
      level: 30,
      price: 6,
      limits: {
        energy: 4,
      },
      energyDice: {
        max: 4,
        tarnStart: 4,
        onesStart: 3,
      },
    },
    {
      name: 'IA-C01G:AORTA',
      level: 30,
      price: 9,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 6,
        tarnStart: 2,
        onesStart: 4,
      },
    },
    {
      name: 'DF-GN-08 SAN-TAI',
      level: 40,
      price: 7,
      limits: {
        energy: 2,
      },
      energyDice: {
        max: 7,
        tarnStart: 3,
        onesStart: 2,
      },
    },
    {
      name: 'AG-T-005 HOKUSHI',
      level: 40,
      price: 8,
      limits: {
        energy: 4,
      },
      energyDice: {
        max: 6,
        tarnStart: 3,
        onesStart: 2,
      },
    },
    {
      name: 'VE-20A',
      level: 40,
      price: 8,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 5,
        tarnStart: 4,
        onesStart: 3,
      },
    },
    {
      name: 'IB-C03G:NGI 000',
      level: 50,
      price: 9,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 6,
        tarnStart: 5,
        onesStart: 1,
      },
    },
    {
      name: 'VE-20B',
      level: 50,
      price: 13,
      limits: {
        energy: 3,
      },
      energyDice: {
        max: 6,
        tarnStart: 4,
        onesStart: 3,
      },
    },
  ],
  booster: [
    {
      name: 'BST-G1/P10',
      level: 10,
      price: 0,
      maneuver: 0,
      move: 0,
      avoidance: 0,
    },
    {
      name: 'BUERZEL/21D',
      level: 10,
      price: 1,
      maneuver: 1,
      move: 0,
      avoidance: 0,
    },
    {
      name: 'BST-G2/P04',
      level: 10,
      price: 2,
      maneuver: -1,
      move: -1,
      avoidance: 0,
    },
    {
      name: 'ALULA/21E',
      level: 10,
      price: 3,
      maneuver: 0,
      move: 0,
      avoidance: -1,
    },
    {
      name: 'BC-0400 MULE',
      level: 20,
      price: 4,
      maneuver: 1,
      move: -1,
      avoidance: 0,
    },
    {
      name: 'AB-J-137 KIKAKU',
      level: 20,
      price: 5,
      maneuver: 2,
      move: 0,
      avoidance: -1,
    },
    {
      name: 'FLUEGEL/21Z',
      level: 20,
      price: 6,
      maneuver: 3,
      move: -1,
      avoidance: 0,
    },
    {
      name: 'BC-0600 12345',
      level: 30,
      price: 5,
      maneuver: -1,
      move: -1,
      avoidance: -1,
    },
    {
      name: 'BST-G2/P06SPD',
      level: 30,
      price: 6,
      maneuver: 0,
      move: -2,
      avoidance: 0,
    },
    {
      name: 'IA-C01B:GILLS',
      level: 40,
      price: 7,
      maneuver: 4,
      move: 0,
      avoidance: -1,
    },
    {
      name: 'BC-0200 GRIDWALKER',
      level: 50,
      price: 8,
      maneuver: 2,
      move: -1,
      avoidance: -1,
    },
    {
      name: 'IB-C03B:NGI 001',
      level: 50,
      price: 9,
      maneuver: 3,
      move: -2,
      avoidance: 0,
    },
  ],
});

export const weaponList = $state.raw({
  weapon: [
    {
      name: 'HG-003 COQUILLETT',
      subName: 'ハンドガン',
      category: '1',
      weaponType: '1',
      key: '1',
      level: 10,
      price: 0,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: [],
    },
    {
      name: 'VP-66LH',
      subName: 'レーザーハンドガン',
      category: '1',
      weaponType: '1',
      key: '2',
      level: 10,
      price: 1,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 9,
        line: 2,
      },
      skills: ['4'],
    },
    {
      name: 'HI-16: GU-Q1',
      subName: 'パルスガン',
      category: '1',
      weaponType: '1',
      key: '3',
      level: 15,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: ['5'],
    },
    {
      name: 'HI-18: GU-A2',
      subName: 'パルスガンⅡ',
      category: '1',
      weaponType: '1',
      key: '4',
      level: 25,
      price: 3,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 9,
        line: 2,
      },
      skills: ['1', '5'],
    },
    {
      name: 'HG-004 DUCKETT',
      subName: 'ハンドガンⅡ',
      category: '1',
      weaponType: '1',
      key: '5',
      level: 35,
      price: 4,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 3,
        line: 5,
      },
      skills: ['1', '1'],
    },
    {
      name: 'MA-E-211 SAMPU',
      subName: 'バーストガン',
      category: '1',
      weaponType: '1',
      key: '6',
      level: 35,
      price: 5,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3, 3],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 4,
        line: 5,
      },
      skills: ['1'],
    },
    {
      name: 'EL-PW-00 VIENTO',
      subName: 'ニードルガン',
      category: '1',
      weaponType: '1',
      key: '7',
      level: 45,
      price: 4,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3, 3],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: ['2'],
    },
    {
      name: 'VP-66EG',
      subName: 'スタンガン',
      category: '1',
      weaponType: '1',
      key: '8',
      level: 50,
      price: 5,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1, 1],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3, 3],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 9,
        line: 2,
      },
      skills: ['3'],
    },
    {
      name: 'MG-014 LUDLOW',
      subName: 'マシンガン',
      category: '2',
      weaponType: '1',
      key: '9',
      level: 10,
      price: 0,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: [],
    },
    {
      name: 'DF-GA-08 HU-BEN',
      subName: 'ガトリングガン',
      category: '2',
      weaponType: '1',
      key: '10',
      level: 15,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4, 5],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 4,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4, 5, 6],
            },
            useBullet: 5,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 5,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 5,
        line: 5,
      },
      skills: ['7'],
    },
    {
      name: 'MA-E-210 ETSUJIN',
      subName: 'バーストマシンガン',
      category: '2',
      weaponType: '1',
      key: '11',
      level: 25,
      price: 4,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 3,
        line: 5,
      },
      skills: ['1'],
    },
    {
      name: 'DF-MG-02 CHANG-CHEN',
      subName: 'マシンガンⅡ',
      category: '2',
      weaponType: '1',
      key: '12',
      level: 35,
      price: 5,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 4,
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 4,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: ['6', '7'],
    },
    {
      name: 'WR-0555 ATTACHE',
      subName: 'ヘビーガン',
      category: '2',
      weaponType: '1',
      key: '13',
      level: 45,
      price: 7,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 3,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4, 5],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 4,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4, 5, 6],
            },
            useBullet: 5,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 5,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 5,
        line: 4,
      },
      skills: ['1', '6', '7'],
    },
    {
      name: 'MA-J-200 RANSETU-RF',
      subName: 'バーストライフル',
      category: '3',
      weaponType: '1',
      key: '14',
      level: 10,
      price: 0,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: [],
    },
    {
      name: 'RF-024 TURNER',
      subName: 'アサルトライフル',
      category: '3',
      weaponType: '1',
      key: '15',
      level: 10,
      price: 1,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: [],
    },
    {
      name: 'VP-66LR',
      subName: 'レーザーライフル',
      category: '3',
      weaponType: '1',
      key: '16',
      level: 10,
      price: 1,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: ['4'],
    },
    {
      name: 'LR-036 CURTIS',
      subName: 'リニアライフル',
      category: '3',
      weaponType: '1',
      key: '17',
      level: 15,
      price: 1,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['10'],
    },
    {
      name: 'MA-J-201 RANSETU-AR',
      subName: 'バーストアサルトライフル',
      category: '3',
      weaponType: '1',
      key: '18',
      level: 15,
      price: 2,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4, 5],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 4,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: ['9'],
    },
    {
      name: 'Vvc-760PR',
      subName: 'プラズマライフル',
      category: '3',
      weaponType: '1',
      key: '19',
      level: 15,
      price: 3,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: ['10'],
    },
    {
      name: 'RF-025 SCUDDER',
      subName: 'アサルトライフルⅡ',
      category: '3',
      weaponType: '1',
      key: '20',
      level: 25,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 3,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4, 5],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 4,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: ['9', '13'],
    },
    {
      name: 'LR-037 HARRIS',
      subName: 'リニアライフルⅡ',
      category: '3',
      weaponType: '1',
      key: '21',
      level: 35,
      price: 4,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['10', '13'],
    },
    {
      name: 'VE-66LRA',
      subName: 'レーザーライフルⅡ',
      category: '3',
      weaponType: '1',
      key: '22',
      level: 35,
      price: 4,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 9,
        line: 2,
      },
      skills: ['9', '4'],
    },
    {
      name: 'IA-C01W:NEBULA',
      subName: 'プラズマライフルN',
      category: '3',
      weaponType: '1',
      key: '23',
      level: 35,
      price: 5,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 3,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5, 6],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 9,
        line: 1,
      },
      skills: ['4'],
    },
    {
      name: 'VE-66LRB',
      subName: 'レーザーライフルⅢ',
      category: '3',
      weaponType: '1',
      key: '24',
      level: 45,
      price: 5,
      limits: {
        weight: 2,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 3,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4, 5],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 4,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 8,
        line: 2,
      },
      skills: ['4'],
    },
    {
      name: '44-142 KRSV',
      subName: 'マルチENライフル',
      category: '3',
      weaponType: '1',
      key: '25',
      level: 45,
      price: 8,
      limits: {
        weight: 2,
        energy: 2,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5, 6],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スナイプ',
            hit: 3,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [6, 6],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'ブラスト',
            hit: 2,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 9,
        line: 1,
      },
      skills: ['4', '12'],
    },
    {
      name: 'IA-C01W6:NB-REDSHIFT',
      subName: 'コーラルライフル RS',
      category: '3',
      weaponType: '1',
      key: '26',
      level: 50,
      price: 6,
      limits: {
        weight: 1,
        energy: 2,
      },
      hitRate: [
        {
          range: '1 - 2',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5, 6],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '4',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['9', '4'],
    },
    {
      name: 'IB-C03W1:WLT 011',
      subName: 'コーラルライフル 011',
      category: '3',
      weaponType: '1',
      key: '27',
      level: 50,
      price: 7,
      limits: {
        weight: 1,
        energy: 3,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3, 4],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '4',
            type: 'スナイプ',
            hit: 3,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5, 6],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '4',
            type: 'スプレッド',
            hit: 3,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [6, 6],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '4',
            type: 'ブラスト',
            hit: 2,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 9,
        line: 1,
      },
      skills: ['8', '4', '12'],
    },
    {
      name: 'SG-026 HALDEMAN',
      subName: 'ショットガン',
      category: '4',
      weaponType: '1',
      key: '28',
      level: 10,
      price: 0,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スプレッド',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 3,
        line: 5,
      },
      skills: [],
    },
    {
      name: 'VP-66LS',
      subName: 'レーザーショットガン',
      category: '4',
      weaponType: '1',
      key: '29',
      level: 15,
      price: 2,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: ['4'],
    },
    {
      name: 'SG-027 ZIMMERMAN',
      subName: 'ヘビーショットガン',
      category: '4',
      weaponType: '1',
      key: '30',
      level: 25,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'スプレッド',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: ['14'],
    },
    {
      name: 'WR-0777 SWEET SIXTEEN',
      subName: 'ショットガンS',
      category: '4',
      weaponType: '1',
      key: '31',
      level: 25,
      price: 4,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スプレッド',
            hit: 1,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 2,
        line: 4,
      },
      skills: ['14'],
    },
    {
      name: 'WUERGER/66E',
      subName: 'レーザーショットガンW',
      category: '4',
      weaponType: '1',
      key: '32',
      level: 35,
      price: 5,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [6, 7],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 4,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 66,
        line: 3,
      },
      skills: ['4', '14'],
    },
    {
      name: 'DF-BA-06 XUAN-GE',
      subName: 'バズーカ',
      category: '5',
      weaponType: '1',
      key: '33',
      level: 10,
      price: 0,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 3,
        line: 3,
      },
      skills: [],
    },
    {
      name: '44-141 JVLN ALPHA',
      subName: '特殊バズーカ',
      category: '5',
      weaponType: '1',
      key: '34',
      level: 10,
      price: 1,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5, 5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 3,
        line: 3,
      },
      skills: ['20'],
    },
    {
      name: 'IRIDIUM',
      subName: 'グレネード IR',
      category: '5',
      weaponType: '1',
      key: '35',
      level: 15,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 3,
        line: 2,
      },
      skills: ['16'],
    },
    {
      name: 'MA-T-222 KYORAI',
      subName: 'ナパーム弾ランチャー',
      category: '5',
      weaponType: '1',
      key: '36',
      level: 15,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1 - 2',
          cost: {
            dice: {
              type: '1',
              roll: [8],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 3,
        line: 2,
      },
      skills: ['15', '18'],
    },
    {
      name: 'DF-GR-07 GOU-CHEN',
      subName: 'グレネード',
      category: '5',
      weaponType: '1',
      key: '37',
      level: 15,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5, 5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 15,
      bullet: {
        number: 2,
        line: 3,
      },
      skills: ['20'],
    },
    {
      name: 'WS-1200 THERAPIST',
      subName: 'スタン弾ランチャー',
      category: '5',
      weaponType: '1',
      key: '38',
      level: 25,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1 - 2',
          cost: {
            dice: {
              type: '1',
              roll: [8],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 3,
        line: 2,
      },
      skills: ['16', '21'],
    },
    {
      name: 'MAJESTIC',
      subName: 'バズーカM',
      category: '5',
      weaponType: '1',
      key: '39',
      level: 25,
      price: 4,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 3,
        line: 3,
      },
      skills: ['19', '20'],
    },
    {
      name: 'MA-T-223 KYORIKU',
      subName: 'ジャミング弾ランチャー',
      category: '5',
      weaponType: '1',
      key: '40',
      level: 35,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1 - 2',
          cost: {
            dice: {
              type: '1',
              roll: [8],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 3,
        line: 3,
      },
      skills: ['16', '17'],
    },
    {
      name: 'WB-0000 BAD COOK',
      subName: '火炎放射器',
      category: '5',
      weaponType: '1',
      key: '41',
      level: 35,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3, 3],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 3,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 3,
        line: 4,
      },
      skills: ['15', '6'],
    },
    {
      name: 'LITTLE GEM',
      subName: 'バズーカLG',
      category: '5',
      weaponType: '1',
      key: '42',
      level: 35,
      price: 5,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 2,
        line: 3,
      },
      skills: ['16', '20'],
    },
    {
      name: 'DIZZY',
      subName: 'グレネードD',
      category: '5',
      weaponType: '1',
      key: '43',
      level: 45,
      price: 6,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5, 5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 2,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 2,
        line: 3,
      },
      skills: ['迫撃', '20'],
    },
    {
      name: 'HML-G2/P19MLT-04',
      subName: 'ハンドミサイル',
      category: '6',
      weaponType: '1',
      key: '44',
      level: 15,
      price: 1,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 2,
      },
      skills: [],
    },
    {
      name: 'PFAU/66D',
      subName: 'パルスハンドミサイル',
      category: '6',
      weaponType: '1',
      key: '45',
      level: 35,
      price: 4,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'スナイプ',
            hit: 3,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: [],
    },
    {
      name: 'HML-G3/P08PL-06',
      subName: '分裂型ハンドミサイル',
      category: '6',
      weaponType: '1',
      key: '46',
      level: 45,
      price: 5,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 3,
        line: 4,
      },
      skills: ['23'],
    },
    {
      name: 'WS-5000 APERITIF',
      subName: '包囲型ハンドミサイル',
      category: '6',
      weaponType: '1',
      key: '47',
      level: 50,
      price: 6,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 2,
        line: 4,
      },
      skills: ['22'],
    },
    {
      name: 'HI-32:BU-TT/A',
      subName: 'パルスブレード',
      category: '7',
      weaponType: '1',
      key: '48',
      isLeftOnly: true,
      level: 10,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['5'],
    },
    {
      name: 'Vvc-770LB',
      subName: 'レーザーブレード',
      category: '7',
      weaponType: '1',
      key: '49',
      isLeftOnly: true,
      level: 10,
      price: 3,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: -10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['27'],
    },
    {
      name: 'PB-033M ASHMEDA',
      subName: 'パイルバンカー',
      category: '7',
      weaponType: '1',
      key: '50',
      isLeftOnly: true,
      level: 15,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 1,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['25', '19'],
    },
    {
      name: 'VP-67EB',
      subName: 'スタンバトン',
      category: '7',
      weaponType: '1',
      key: '51',
      isLeftOnly: true,
      level: 25,
      price: 4,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 4,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 3,
          },
        },
      ],
      damageCorrection: -10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['26', '21'],
    },
    {
      name: '44-143 HMMR',
      subName: 'プラズマ機雷投射機',
      category: '7',
      weaponType: '1',
      key: '52',
      isLeftOnly: true,
      level: 35,
      price: 4,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['24', '19'],
    },
    {
      name: 'QB-0010 DOUBLE TROUBLE',
      subName: 'チェーンソー',
      category: '7',
      weaponType: '1',
      key: '53',
      isLeftOnly: true,
      level: 35,
      price: 4,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['2', '25', '19'],
    },
    {
      name: 'DF-ET-09 TAI-YANG-SHOU',
      subName: '炸裂弾投射機',
      category: '7',
      weaponType: '1',
      key: '54',
      isLeftOnly: true,
      level: 35,
      price: 4,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '1',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['27'],
    },
    {
      name: 'VE-67LLA',
      subName: 'レーザーランス',
      category: '7',
      weaponType: '1',
      key: '55',
      isLeftOnly: true,
      level: 35,
      price: 5,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: -5,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['25', '19'],
    },
    {
      name: 'VP-67LD',
      subName: 'レーザーダガー',
      category: '7',
      weaponType: '1',
      key: '56',
      isLeftOnly: true,
      level: 45,
      price: 5,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 4,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['24', '27', '5'],
    },
    {
      name: 'IA-C01W2:MOONLIGHT',
      subName: '光波ブレード',
      category: '7',
      weaponType: '1',
      key: '57',
      isLeftOnly: true,
      level: 45,
      price: 6,
      limits: {
        weight: 0,
        energy: 2,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['25', '27'],
    },
    {
      name: 'Vvc-774LS',
      subName: 'レーザースライサー',
      category: '7',
      weaponType: '1',
      key: '58',
      isLeftOnly: true,
      level: 50,
      price: 8,
      limits: {
        weight: 1,
        energy: 2,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 4,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '2',
            type: 'メレー',
            hit: 4,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['24', '27', '19'],
    },
    {
      name: 'IA-C01W7:ML-REDSHIFT',
      subName: 'コーラル発振装置 RS',
      category: '7',
      weaponType: '1',
      key: '59',
      isLeftOnly: true,
      level: 50,
      price: 7,
      limits: {
        weight: 0,
        energy: 2,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '4',
            type: 'メレー',
            hit: 1,
          },
        },
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '4',
            type: 'メレー',
            hit: 2,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['25', '13'],
    },
    {
      name: 'IB-C03W2:WLT 101',
      subName: 'コーラル発振装置 101',
      category: '7',
      weaponType: '1',
      key: '60',
      isLeftOnly: true,
      level: 50,
      price: 9,
      limits: {
        weight: 1,
        energy: 2,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 2,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '4',
            type: 'メレー',
            hit: 2,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '3',
              number: 3,
            },
            useBullet: 0,
          },
          rate: {
            attribute: '4',
            type: 'メレー',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['25', '27', '5'],
    },
    {
      name: 'BML-G1/P20MLT-04',
      subName: '4連装ミサイル',
      category: '6',
      weaponType: '2',
      key: '61',
      level: 10,
      price: 0,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: [],
    },
    {
      name: 'BML-G1/P01VTC-04',
      subName: '4連装垂直ミサイル',
      category: '6',
      weaponType: '2',
      key: '62',
      level: 10,
      price: 1,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 3,
      },
      skills: ['32'],
    },
    {
      name: 'BML-G1/P31DUO-02',
      subName: '小型2連双対ミサイル',
      category: '6',
      weaponType: '2',
      key: '63',
      level: 10,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [8],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 2,
      },
      skills: ['34'],
    },
    {
      name: 'Vvc-703PM',
      subName: '3連プラズマミサイル',
      category: '6',
      weaponType: '2',
      key: '64',
      level: 15,
      price: 1,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [9],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['29'],
    },
    {
      name: 'BML-G3/P04ACT-01',
      subName: '高誘導ミサイル',
      category: '6',
      weaponType: '2',
      key: '65',
      level: 15,
      price: 2,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 1,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 2,
        line: 5,
      },
      skills: ['31'],
    },
    {
      name: 'BML-G2/P16SPL-08',
      subName: '八分裂ミサイル',
      category: '6',
      weaponType: '2',
      key: '66',
      level: 15,
      price: 2,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [14],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 3,
      },
      skills: ['23'],
    },
    {
      name: 'BML-G2/P05MLT-10',
      subName: '10連装ミサイル',
      category: '6',
      weaponType: '2',
      key: '67',
      level: 15,
      price: 3,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [17],
            },
            useBullet: 5,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 5,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 5,
        line: 4,
      },
      skills: ['29'],
    },
    {
      name: 'BML-G1/P03VTC-08',
      subName: '8連装垂直ミサイル',
      category: '6',
      weaponType: '2',
      key: '68',
      level: 15,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [13],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 3,
      },
      skills: ['29', '32'],
    },
    {
      name: 'BML-G2/P17SPL-16',
      subName: '2連八分裂ミサイル',
      category: '6',
      weaponType: '2',
      key: '69',
      level: 15,
      price: 4,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [13],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 4,
        line: 3,
      },
      skills: ['23'],
    },
    {
      name: 'Vvc-70VPM',
      subName: '垂直プラズマミサイル',
      category: '6',
      weaponType: '2',
      key: '70',
      level: 15,
      price: 4,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['32'],
    },
    {
      name: 'BML-G1/P32DOU-03',
      subName: '小型3連双対ミサイル',
      category: '6',
      weaponType: '2',
      key: '71',
      level: 25,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [9],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 3,
        line: 4,
      },
      skills: ['34'],
    },
    {
      name: '45-091 JVLN BETA',
      subName: '特殊ミサイル',
      category: '6',
      weaponType: '2',
      key: '72',
      level: 25,
      price: 4,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '0 - 1',
          cost: {
            dice: {
              type: '1',
              roll: [12],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 2,
        line: 4,
      },
      skills: ['8', '22'],
    },
    {
      name: 'BML-G2/P03MLT-06',
      subName: '6連装ミサイル',
      category: '6',
      weaponType: '2',
      key: '73',
      level: 35,
      price: 4,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [9],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 3,
      },
      skills: ['29'],
    },
    {
      name: 'BML-G3/P05ACT-02',
      subName: '2連高誘導ミサイル',
      category: '6',
      weaponType: '2',
      key: '74',
      level: 35,
      price: 5,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 2,
        line: 4,
      },
      skills: ['31'],
    },
    {
      name: 'Vvc-706PM',
      subName: '6連プラズマミサイル',
      category: '6',
      weaponType: '2',
      key: '75',
      level: 35,
      price: 6,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'ミサイル',
            hit: 2,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [13],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '2',
            type: 'ミサイル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 8,
        line: 2,
      },
      skills: ['29'],
    },
    {
      name: 'BML-G2/P19SPL-12',
      subName: '2連六分裂ミサイル',
      category: '6',
      weaponType: '2',
      key: '76',
      level: 45,
      price: 5,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 3,
        line: 4,
      },
      skills: ['29', '23'],
    },
    {
      name: 'BML-G2/P08DUO-03',
      subName: '中型3連双対ミサイル',
      category: '6',
      weaponType: '2',
      key: '77',
      level: 45,
      price: 5,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [9],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: ['29', '34'],
    },
    {
      name: 'BML-G1/P07VTC-12',
      subName: '12連装垂直ミサイル',
      category: '6',
      weaponType: '2',
      key: '78',
      level: 45,
      price: 7,
      limits: {
        weight: 2,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [16],
            },
            useBullet: 5,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 5,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 5,
        line: 3,
      },
      skills: ['32'],
    },
    {
      name: 'BML-G1/P29CNT',
      subName: 'コンテナミサイル',
      category: '6',
      weaponType: '2',
      key: '79',
      level: 45,
      price: 8,
      limits: {
        weight: 3,
        energy: 0,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [11],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [10],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 3,
        line: 4,
      },
      skills: ['16', '31'],
    },
    {
      name: 'IA-C01W3:AURORA',
      subName: '光波キャノン',
      category: '6',
      weaponType: '2',
      key: '80',
      level: 45,
      price: 8,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [8],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '4',
            type: 'ミサイル',
            hit: 2,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [14],
            },
            useBullet: 4,
          },
          rate: {
            attribute: '4',
            type: 'ミサイル',
            hit: 4,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 4,
        line: 4,
      },
      skills: ['31', '22'],
    },
    {
      name: 'EL-PW-01 TRUNERO',
      subName: 'ニードルミサイル',
      category: '6',
      weaponType: '2',
      key: '81',
      level: 45,
      price: 5,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 1,
          },
        },
      ],
      damageCorrection: 20,
      bullet: {
        number: 3,
        line: 2,
      },
      skills: ['30', '2'],
    },
    {
      name: 'IB-C03W3:NGI 006',
      subName: 'コーラルミサイル',
      category: '6',
      weaponType: '2',
      key: '82',
      level: 50,
      price: 7,
      limits: {
        weight: 2,
        energy: 2,
      },
      hitRate: [
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '4',
            type: 'ミサイル',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '4',
            type: 'ミサイル',
            hit: 1,
          },
        },
      ],
      damageCorrection: 15,
      bullet: {
        number: 1,
        line: 5,
      },
      skills: ['16', '4'],
    },
    {
      name: 'WR-0999 DELIVERY BOY',
      subName: 'クラスタミサイル',
      category: '6',
      weaponType: '2',
      key: '83',
      level: 50,
      price: 9,
      limits: {
        weight: 3,
        energy: 0,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [11],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 15,
      bullet: {
        number: 3,
        line: 3,
      },
      skills: ['16', '32', '33'],
    },
    {
      name: 'WS-5001 SOUP',
      subName: '散布型ミサイル',
      category: '6',
      weaponType: '2',
      key: '84',
      level: 50,
      price: 10,
      limits: {
        weight: 2,
        energy: 1,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [15],
            },
            useBullet: 5,
          },
          rate: {
            attribute: '3',
            type: 'ミサイル',
            hit: 5,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 5,
        line: 4,
      },
      skills: ['31', '22'],
    },
    {
      name: 'SONGBIRDS',
      subName: '小型連装グレネードキャノン',
      category: '5',
      weaponType: '2',
      key: '85',
      level: 10,
      price: 1,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4, 4],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '3',
            type: 'スプレッド',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 4,
        line: 2,
      },
      skills: ['20'],
    },
    {
      name: 'DF-GA-09 SHAO-WEI',
      subName: 'ガトリングキャノン',
      category: '5',
      weaponType: '2',
      key: '86',
      level: 25,
      price: 3,
      limits: {
        weight: 1,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 3,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 4,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 4,
          },
        },
        {
          range: '0',
          cost: {
            dice: {
              type: '2',
              number: 4,
            },
            useBullet: 5,
          },
          rate: {
            attribute: '1',
            type: 'ガトリング',
            hit: 5,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 5,
        line: 4,
      },
      skills: ['6', '7'],
    },
    {
      name: 'SB-033M MORLEY',
      subName: '拡散バズーカ',
      category: '5',
      weaponType: '2',
      key: '87',
      level: 35,
      price: 4,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 2,
        line: 3,
      },
      skills: ['20'],
    },
    {
      name: 'VE-60SNA',
      subName: 'スタンニードルランチャー',
      category: '5',
      weaponType: '2',
      key: '88',
      level: 35,
      price: 5,
      limits: {
        weight: 2,
        energy: 1,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3, 3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [3, 3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'スナイプ',
            hit: 1,
          },
        },
      ],
      damageCorrection: 30,
      bullet: {
        number: 3,
        line: 3,
      },
      skills: ['3'],
    },
    {
      name: 'EARSHOT',
      subName: '大型グレネードキャノン',
      category: '5',
      weaponType: '2',
      key: '89',
      level: 45,
      price: 6,
      limits: {
        weight: 3,
        energy: 0,
      },
      hitRate: [
        {
          range: '0',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '1',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '3',
            type: 'ブラスト',
            hit: 1,
          },
        },
      ],
      damageCorrection: 20,
      bullet: {
        number: 2,
        line: 3,
      },
      skills: ['36', '20'],
    },
    {
      name: 'VP-60LCS',
      subName: 'レーザーキャノン',
      category: '8',
      weaponType: '2',
      key: '90',
      level: 10,
      price: 1,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 2,
          },
        },
      ],
      damageCorrection: 15,
      bullet: {
        number: 8,
        line: 1,
      },
      skills: ['4'],
    },
    {
      name: 'VP-60LCB',
      subName: '可変式レーザーキャノン',
      category: '8',
      weaponType: '2',
      key: '91',
      level: 25,
      price: 4,
      limits: {
        weight: 2,
        energy: 2,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 2,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 5,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['4', '10'],
    },
    {
      name: 'VP-60LCD',
      subName: '拡散レーザーキャノン',
      category: '8',
      weaponType: '2',
      key: '92',
      level: 35,
      price: 6,
      limits: {
        weight: 1,
        energy: 2,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 2,
          },
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 8,
        line: 1,
      },
      skills: ['4'],
    },
    {
      name: 'FASAN/60E',
      subName: 'プラズマキャノン',
      category: '8',
      weaponType: '2',
      key: '93',
      level: 45,
      price: 7,
      limits: {
        weight: 1,
        energy: 3,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [4, 4],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 1,
          },
        },
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [5, 5],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 2,
          },
        },
      ],
      damageCorrection: 20,
      bullet: {
        number: 10,
        line: 1,
      },
      skills: ['16', '10', '4'],
    },
    {
      name: 'VE-60LCA',
      subName: '3連レーザーキャノン',
      category: '8',
      weaponType: '2',
      key: '94',
      level: 50,
      price: 8,
      limits: {
        weight: 2,
        energy: 3,
      },
      hitRate: [
        {
          range: '2',
          cost: {
            dice: {
              type: '1',
              roll: [6, 6],
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'スプレッド',
            hit: 3,
          },
        },
      ],
      damageCorrection: 30,
      bullet: {
        number: 9,
        line: 1,
      },
      skills: ['16', '4'],
    },
    {
      name: 'KRANICH/60Z',
      subName: 'パルスキャノン',
      category: '8',
      weaponType: '2',
      key: '95',
      level: 50,
      price: 5,
      limits: {
        weight: 0,
        energy: 2,
      },
      hitRate: [
        {
          range: '1 - 2',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '1 - 2',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['1', '5'],
    },
    {
      name: 'VP-60LT',
      subName: 'レーザータレット',
      category: '9',
      weaponType: '2',
      key: '96',
      level: 25,
      price: 4,
      limits: {
        weight: 0,
        energy: 2,
      },
      hitRate: [
        {
          range: '0 - 2',
          cost: {
            dice: {
              type: '1',
              roll: [3],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '0 - 2',
          cost: {
            dice: {
              type: '1',
              roll: [3, 4],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 15,
      bullet: {
        number: 8,
        line: 1,
      },
      skills: ['38'],
    },
    {
      name: '45-091 ORBT',
      subName: 'レーザーオービット',
      category: '9',
      weaponType: '2',
      key: '97',
      level: 35,
      price: 6,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 10,
      bullet: {
        number: 4,
        line: 2,
      },
      skills: ['37'],
    },
    {
      name: 'BO-044 HUXLEY',
      subName: '実弾オービット',
      category: '9',
      weaponType: '2',
      key: '98',
      level: 45,
      price: 5,
      limits: {
        weight: 1,
        energy: 1,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 1,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 1,
          },
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2, 3],
            },
            useBullet: 2,
          },
          rate: {
            attribute: '1',
            type: 'ノーマル',
            hit: 2,
          },
        },
      ],
      damageCorrection: 20,
      bullet: {
        number: 2,
        line: 4,
      },
      skills: ['37'],
    },
    {
      name: 'Vvc-700LD',
      subName: 'レーザードローン',
      category: '9',
      weaponType: '2',
      key: '99',
      level: 50,
      price: 8,
      limits: {
        weight: 1,
        energy: 2,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '2',
              number: 2,
            },
            useBullet: 2,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 2,
          },
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '2',
              number: 3,
            },
            useBullet: 3,
          },
          rate: {
            attribute: '2',
            type: 'ノーマル',
            hit: 3,
          },
        },
      ],
      damageCorrection: 15,
      bullet: {
        number: 6,
        line: 2,
      },
      skills: ['39'],
    },
    {
      name: 'SI-24:SU-Q5',
      subName: 'パルスシールド',
      category: '10',
      weaponType: '2',
      key: '100',
      level: 10,
      price: 0,
      isLeftOnly: true,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '3',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '2',
              armer: 20,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['41'],
    },
    {
      name: 'VP-61PB',
      subName: 'パルスバックラー',
      category: '10',
      weaponType: '2',
      key: '101',
      level: 15,
      price: 1,
      isLeftOnly: true,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '2',
              armer: 20,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['40', '41'],
    },
    {
      name: 'SI-27:SU-R8',
      subName: 'パルスシールドⅡ',
      category: '10',
      weaponType: '2',
      key: '102',
      level: 15,
      price: 2,
      isLeftOnly: true,
      limits: {
        weight: 0,
        energy: 0,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '3',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [6],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 30,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [6],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '2',
              armer: 30,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['41', '42'],
    },
    {
      name: 'SI-29:SU-TT/C',
      subName: 'パルスバックラーⅡ',
      category: '10',
      weaponType: '2',
      key: '103',
      level: 25,
      price: 1,
      isLeftOnly: true,
      limits: {
        weight: 2,
        energy: 1,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 40,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [1, 1],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '3',
              armer: 40,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['40', '41', '44'],
    },
    {
      name: 'VP-61PS',
      subName: 'パルスシールドⅢ',
      category: '10',
      weaponType: '2',
      key: '104',
      level: 25,
      price: 2,
      isLeftOnly: true,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [1],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [4],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '2',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [7],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '2',
              armer: 40,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['41', '44'],
    },
    {
      name: 'EULE/60D',
      subName: 'パルスシールド投射機',
      category: '10',
      weaponType: '2',
      key: '105',
      level: 35,
      price: 5,
      isLeftOnly: true,
      limits: {
        weight: 0,
        energy: 1,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [3],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [6],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 20,
            },
            {
              attribute: '2',
              armer: 20,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [9],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 20,
            },
            {
              attribute: '3',
              armer: 20,
            },
            {
              attribute: '2',
              armer: 20,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['43'],
    },
    {
      name: 'IB-C03W4:NGI 028',
      subName: 'コーラルシールド',
      category: '10',
      weaponType: '2',
      key: '106',
      level: 45,
      price: 5,
      isLeftOnly: true,
      limits: {
        weight: 0,
        energy: 3,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 10,
            },
            {
              attribute: '3',
              armer: 10,
            },
            {
              attribute: '2',
              armer: 10,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [2],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '4',
              armer: 20,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['40', '41'],
    },
    {
      name: 'VE-61PSA',
      subName: 'パルススクトゥム',
      category: '10',
      weaponType: '2',
      key: '107',
      level: 5,
      price: 4,
      isLeftOnly: true,
      limits: {
        weight: 2,
        energy: 2,
      },
      hitRate: [
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '1',
              armer: 30,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '3',
              armer: 30,
            },
          ],
        },
        {
          range: '自身',
          cost: {
            dice: {
              type: '1',
              roll: [5],
            },
            useBullet: 0,
          },
          defence: [
            {
              attribute: '2',
              armer: 30,
            },
          ],
        },
      ],
      damageCorrection: 0,
      bullet: {
        number: 0,
        line: 0,
      },
      skills: ['41', '42', '44'],
    },
  ],
});

export const legType = $state.raw([
  { key: '0', name: '二脚' },
  { key: '1', name: '逆関節' },
  { key: '2', name: '四脚' },
  { key: '3', name: 'タンク' },
]);

export const attributeType = $state.raw([
  { key: '1', name: '弾丸' },
  { key: '2', name: 'EN' },
  { key: '3', name: '爆発' },
  { key: '4', name: 'コーラル' },
]);

export const weaponType = $state.raw([
  { key: '1', name: 'ハンドガン' },
  { key: '2', name: 'マシンガン' },
  { key: '3', name: 'ライフル' },
  { key: '4', name: 'ショットガン' },
  { key: '5', name: 'BGL' },
  { key: '6', name: 'ミサイル' },
  { key: '7', name: '近接' },
  { key: '8', name: 'キャノン' },
  { key: '9', name: 'その他' },
  { key: '10', name: 'その他/シールド' },
]);

export const weaponSkillData = $state.raw([
  {
    key: '1',
    name: '高速リロード（武装）',
    timing: 'Action',
    cost: [2],
    effect: [
      'この武装は、同じターンにもう一度アタックできるようになる。',
      'この武装を装備している機体が持つ「高速リロード」1つにつき、1ターンに1回まで有効。',
      'このスキルの使用後、ENダイスに1Dを追加する。',
    ],
  },
  {
    key: '2',
    name: '装甲破壊',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で1Hit以上のダメージを受けた対象は、ターン終了まで「防弾性能：弾-10（下限0）」する。（この効果は重複しない）',
    ],
  },
  {
    key: '3',
    name: '帯電ニードル弾',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で1Hit以上のダメージを受けた対象に対し、「基準値：3 + Hit数」で「放電障害」を与えるためのシステム障害付与判定を行う。',
    ],
  },
  {
    key: '4',
    name: 'チャージショット',
    timing: 'Trigger',
    cost: [3],
    effect: ['この武装でアタックするとき、使用を宣言できる。', '「威力補正：+ 15」する。'],
  },
  {
    key: '5',
    name: 'パルス干渉',
    timing: 'Passive',
    cost: [0],
    effect: [
      'このスキルを持つ武装によるアタックは「パルスアーマー」の効果を得ている対象に対して「威力補正：+ 20」する。',
      'この武装で1Hit以上のダメージを受けた対象は、効果処理後に「シールドガード」「シールド投射」「パルスプロテクション」「ターミナルアーマー」によって得た追加の防御性能をすべて失い、ターン終了時まで新たに得ることが出来なくなる。',
    ],
  },
  {
    key: '6',
    name: 'チャンス到来',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で行うアタックで対象がスタッガー状態になった場合、ENダイスに1Dを追加する。',
      'この武装で行うアタックで対象がスタッガー状態になった場合、この武装は同じターンにもう一度アタックできるようになる。',
    ],
  },
  {
    key: '7',
    name: '蜂の巣',
    timing: 'Passive',
    cost: [0],
    effect: [
      'このスキルを持つ武装のアタックを対象が完全回避しなかった場合、1 ~ 3Hitであれば「威力補正：+ 5」、4Hit以上であれば「威力補正：+ 10」する。',
    ],
  },
  {
    key: '8',
    name: '軌道範囲射撃',
    timing: 'Trigger',
    cost: [3],
    effect: [
      'この武装でアタックするとき、使用を宣言できる。',
      'この武装によるアタックの対象を「エネミー1体」から「エリア1つに存在するエネミーすべて」に変更する。',
      'アタックパターンが「適正レンジ：0 - 1」の場合、対象が「この武装を持つ味方機の存在するエリア（レンジ0）」と「隣接するエリア1つに存在するエネミーすべて」になる。',
    ],
  },
  {
    key: '9',
    name: '狙撃',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装によるアタックの対象が「敵味方を含めてエリアに1体しか存在していない」場合、「威力補正：+ 10」する。',
    ],
  },
  {
    key: '10',
    name: 'チャージ高速弾',
    timing: 'Trigger',
    cost: [2],
    effect: ['この武装でアタックするとき、使用を宣言できる。', 'アタックの対象は回避できない。'],
  },
  {
    key: '12',
    name: 'ハイチャージショット',
    timing: 'Trigger',
    cost: [2, 2],
    effect: ['この武装でアタックするとき、使用を宣言できる。', '「威力補正：+ 25」する。'],
  },
  {
    key: '13',
    name: '部位狙い（武装）',
    timing: 'Trigger',
    cost: [3],
    effect: [
      'この武装でアタックするとき、使用を宣言できる。',
      '部位決定ダイスを追加で1つ振り、任意の出目を選ぶ。',
    ],
  },
  {
    key: '14',
    name: 'バラージ',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で行うアタックの対象が、未行動の行動順を1回以上持つ場合、「威力補正：+ 10」する。',
    ],
  },
  {
    key: '15',
    name: 'ACS障害付与',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で1Hit以上のダメージを受けた対象に対し、「基準値：3 + Hit数」で「ACS障害」を与えるためのシステム障害付与判定を行う。',
    ],
  },
  {
    key: '16',
    name: 'エリア砲撃',
    timing: 'Trigger',
    cost: [2],
    effect: [
      'この武装でアタックするとき、使用を宣言できる。',
      'エリア1つにいるすべてのエネミーが対象になる。',
    ],
  },
  {
    key: '17',
    name: 'ジャミング砲弾',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で1Hit以上のダメージを受けた対象は、このターンの間に行う「カテゴリ：ミサイル」「カテゴリ：その他」の[Action]のHit数が自動的に2Hit分原種皇する（4Hitのアタックだったとしても、ダメージは2Hitとなる）。',
    ],
  },
  {
    key: '18',
    name: '焼夷弾',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装のアタックが対象に完全回避（0Hitになること）された時、対象の「部位決定ダイス：6」の部位に【爆：10（貫通）】の適用ダメージ（回避負荷）を与える（部位が1つしか無い場合コア部位に適用）。',
      '飛行中の対象には無効（判断しづらいときはGMが決定する）。',
    ],
  },
  {
    key: '19',
    name: '追撃',
    timing: 'Passive',
    cost: [0],
    effect: ['この武装のアタックは、対象がスタッガー状態の場合「威力補正：+ 10」する。'],
  },
  {
    key: '20',
    name: '低弾速',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で「レンジ：0」のアタックを行う場合「威力補正：+ 10」する。',
      'この武装で「レンジ：2」のアタックを行う場合「威力補正：- 10」する。',
    ],
  },
  {
    key: '21',
    name: '放電障害付与',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装で1Hit以上のダメージを受けた対象に対し、「基準値：3 + Hit数」で「放電障害」を与えるためのシステム障害付与判定を行う。',
    ],
  },
  {
    key: '22',
    name: '時間差包囲ミサイル',
    timing: 'Passive',
    cost: [0],
    effect: ['この武装のアタック終了後、ENダイスに1Dを追加する。'],
  },
  {
    key: '23',
    name: '分裂ミサイル',
    timing: 'Trigger',
    cost: [3],
    effect: [
      'この武装でアタックするとき、使用を宣言できる。',
      '対象はこの武装でのアタックを回避できない。',
    ],
  },
  {
    key: '24',
    name: '高速リチャージ',
    timing: 'Action',
    cost: [2],
    effect: [
      'この武装は、同じターンにもう一度アタックできるようになる。',
      '1ターンに1回まで有効。',
      'このスキルの使用後、ENダイスに1Dを追加する。',
    ],
  },
  {
    key: '25',
    name: 'チャージアタック',
    timing: 'Trigger',
    cost: [3],
    effect: ['この武装でアタックするとき、使用を宣言できる。', '「威力補正：+ 15」する。'],
  },
  {
    key: '26',
    name: 'チャージ帯電',
    timing: 'Trigger',
    cost: [4],
    effect: [
      'この武装でアタックするとき、使用を宣言できる。',
      '「威力補正：+ 10」し、直後に行う「放電障害」を与えるためのシステム障害付与判定に「基準値：3 + Hit数」のボーナスを得る。',
    ],
  },
  {
    key: '27',
    name: 'チャージ薙ぎ払い',
    timing: 'Trigger',
    cost: [2],
    effect: [
      'この武装でアタックするとき、使用を宣言できる。',
      'エリア1つにいるすべてのエネミーが対象になる。',
    ],
  },
  {
    key: '29',
    name: '確実ロックオン',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装によるアタックの対象が「敵味方を含めてエリアに1体しか存在していない」場合、「威力補正：+ 10」する。',
    ],
  },
  {
    key: '30',
    name: '高速弾',
    timing: 'Passive',
    cost: [0],
    effect: [
      'このスキルを持つ武装のアタックを回避する場合、1Hitごとに回避を2回行わなければならない。',
    ],
  },
  {
    key: '31',
    name: '高誘導',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装のアタック対象がこのターンに1回以上の「アタックまたは[Action]」を行っている場合、この武装によるアタックに「威力補正：+ 10」する。',
    ],
  },
  {
    key: '32',
    name: '上部狙い',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装のアタックするとき、部位決定ダイスを一つ多く振り、小さなほうの出目を採用する（例：1と6が出た場合6の出目を強制的に選択する）。',
      'この武装によるアタックに「部位狙い」のスキル効果は発揮されない。',
    ],
  },
  {
    key: '33',
    name: '自立爆撃',
    timing: 'Passive',
    cost: [0],
    effect: [
      'このスキルを持つ武装のアタックは、完全回避できない（最低1Hitまでしか減少できない）。',
    ],
  },
  {
    key: '34',
    name: '双対ミサイル',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装のアタックに対し、対象が回避を一度も行わなかった場合、「威力補正：+ 10」する。',
    ],
  },
  {
    key: '36',
    name: 'カウンター砲撃',
    timing: 'Trigger',
    cost: [1],
    effect: [
      'この武装で「カウンター砲撃」が可能になる（対象のアタックに割り込んでのアタックが可能）。',
      '',
      '「カウンター砲撃」',
      'この武装を選択している機体（以下、自機）に、エネミーが「レンジ：0」の[Action]を行ったとき、使用を宣言できる。',
      'この時、[Action]を行ったエネミーを対象とする。',
      '自機の回避や[Reaction]よりも先に、対象に対しこの武装でアタックを行う。この武装のアタックに必要なダイスコストと弾数コストは消費しなければならない（スキルとは別途で「通常のアタックに必要なコスト」消費しなければならない。このアタックによる適用ダメージにより、対象が撃破されるかスタッガー状態になった場合、対象のアタックと[Action]は効果を発揮しない。',
      'この効果による自機のアタックの後、自機は対象の行ったアタックに対して回避や[Reaction]できない。',
    ],
  },
  {
    key: '37',
    name: 'オービット展開',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装はアタックに使用できず、代わりにこの武装の使用者（以下、自機）を対象とした「オービット付与」の[Action]にしか使用できない。オービット付与を実行した際に、土のアタックパターンを実行したのか記録すること。',
      '1つの武装によるオービット付与は、一度の手番処理に1回まで有効。',
      'オービット付与を実行した場合、自機はターン終了まで「オービット展開状態」になる。オービット展開状態は、自機がエネミーのアタック対象になった際、そのアタック終了時に（完全回避したとしても）終了する。オービット展開状態は重複せず、自機が重複した状態になりそうな場合、後から実行されたものを優先する。',
      'オービット展開状態の自機がアタックを行った場合、その処理の終了時に、アタックの対象に対してこの武装のヒットレートが発生する。この武装のヒットレートに対しては、回避と[Reaction]を行えない。',
      'この武装のヒットレートは、この武装でオービット付与を行った際にアタックパターンとして記録したものである。',
    ],
  },
  {
    key: '38',
    name: 'タレット設置',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装はアタックに使用できず、代わりに適正レンジ内のエリア1つを対象とした「タレット展開」の【Action】にしか使用できない。タレット展開を実行した際に、どのアタックパターンを実行したのか記録すること。',
      '1つの武装によるタレット展開は、一度の手番処理に1回まで有効。',
      'タレット展開を実行した場合、対象エリアはターン終了まで「タレット設置状態」になる。タレット設置状態は重複せず、同じエリアが重複した状態になりそうな場合、後から実行されたものを優先する。',
      'タレット設置状態のエリアでは、「行動順：10.5 / 7.5 / 3.5」の3回の行動順の開始時（手番処理の開始時）に、そのエリアにいるエネミー1体（複数存在するならランダムに選んだ1体）に対して、この武装のヒットレートが発生する。この武装のヒットレートに対しては、回避と[Reaction]を行えない。',
      'この武装のヒットレートは、この武装でタレット設置を行った際にアタックパターンとして記録したものである。',
    ],
  },
  {
    key: '39',
    name: 'ドローン展開',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装はアタックに使用できず、代わりにこの武装の使用者（以下、自機）を対象とした「ドローン付与」の[Action]にしか使用できない。オービット付与を実行した際に、土のアタックパターンを実行したのか記録すること。',
      '1つの武装によるドローン付与は、一度の手番処理に1回まで有効。',
      'ドローン付与を実行した場合、自機はターン終了まで「ドローン展開状態」になる。ドローン展開状態は、自機がエネミーのアタック対象になった際、そのアタック終了時に（完全回避したとしても）終了する。ドローン展開状態は重複せず、自機が重複した状態になりそうな場合、後から実行されたものを優先する。',
      'ドローン展開状態の自機がアタックを行った場合はアタックの対象に対して、ドローン展開状態の自機がアタックの対象になった場合はアタックを行ったエネミーに対して、そのアタックの処理の終了時にこの武装のヒットレートが発生する。この武装のヒットレートに対しては、回避と[Reaction]を行えない。',
      'この武装のヒットレートは、この武装でドローン付与を行った際にアタックパターンとして記録したものである。',
    ],
  },
  {
    key: '40',
    name: 'イニシャルガード',
    timing: 'Passive',
    cost: [0],
    effect: ['ガード処理後、「ENダイス」を一回振り、獲得する', '1ターンに1回まで有効。'],
  },
  {
    key: '41',
    name: 'シールドガード',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装はアタックに使用できない。この武装がアタックの対象になったとき、回避の代わりにこのスキルを[Reaction]として使用できる。回避やほかの[Reaction]との併用はできない。',
      'このスキルを持つ武装に指定されているコストを費やすことで、アタックの処理が終了するまで、すべての部位にアタックパターンに応じた防御性能を得る。これを「ガード処理」と呼ぶ。',
      'ガード処理は、一度のヒットレートに対して1回まで有効（1ターンの間の複数回の仕様が可能）。',
    ],
  },
  {
    key: '42',
    name: 'シールド継続展開',
    timing: 'Trigger',
    cost: [3],
    effect: [
      'ガード処理後、ターン終了までシールドガードによって得た追加の防御性能を得る。',
      'この効果は重複しない。',
    ],
  },
  {
    key: '43',
    name: 'シールド投射',
    timing: 'Passive',
    cost: [0],
    effect: [
      'この武装はアタックに利用できない。代わりに現在存在するエリアに[Action]として「シールド投射」を行う。一度の手番処理の間に1回まで有効。',
      'ターン終了まで、「シールド投射」を行ったエリアに存在する味方機体と両機は、この武装のアタックパターンに応じた防御性能を得る。',
      '「シールド投射」の効果は重複せず、同じターン内に同じエリアで使用された場合、後から実行されたものを優先する。',
    ],
  },
  {
    key: '44',
    name: '衝撃軽減',
    timing: 'Trigger',
    cost: [1],
    effect: [
      'この武装で「ガード処理」を行うとき、使用を宣言できる。',
      'ガード処理の効果に「衝撃軽減」を付与する。',
      '「衝撃軽減」',
      'この武装を持つ機体は、1Line全損するときスタッガー状態にならず、「チェック方法：貫通」の適用ダメージを受けて1Line全損するとき、余剰の適用ダメージをほかのLineに受けない（2Line目に損害を受けない）。',
    ],
  },
]);

export const skillData = $state.raw([
  {
    key: '1',
    category: '1',
    name: 'クイックブースト回避',
    trigger: 'Reaction',
    cost: { type: '1', dice: [1, 1] },
    effect: [
      '適用されたヒットレートを2Hit分軽減する（通常の回避を組み合わせてもよい）。',
      '一度のヒットレートに対して1回まで有効',
    ],
    explanation: 'ブースターを瞬間的に爆発させることで、一時的に高機動化する技術。',
  },
  {
    key: '2',
    category: '1',
    name: 'アサルトブースト移動',
    trigger: 'Action',
    cost: { type: '1', dice: [4] },
    effect: ['「移動」を二回分連続して行う。', '一度の手番処理ごとに1回まで有効。'],
    explanation: 'ブースターを高出力で噴射し続ける、突進技術。',
  },
  {
    key: '3',
    category: '1',
    name: 'ウェポンハンガー',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'アセンブルの際に、肩武装の代わりに腕武装を選択できる。',
      '戦闘中、同じ腕に選択している武装の選択部位（腕武装Rと肩武装R、または腕武装Lと肩武装L）を交換可能。「[Action]/ダイスコスト：1」で行う。',
      '非戦闘時（行為判定中などは除く）であればいつでも交換可能。',
    ],
    explanation: '肩武装を「腕武装の補助武器格納」として用いることのできる拡張機能。',
  },
  {
    key: '4',
    category: '2',
    name: 'ブーストキック',
    trigger: 'Action',
    cost: { type: '1', dice: [2] },
    effect: [
      '「レンジ：0/対象：エネミー1体」で「弾|メレー 1Hit(-10)」のアタックを行う。',
      'この[Action]の直前に「移動（どんな移動でもよい）」を行っている場合は、「威力補正： +10（結果「弾|メレー 1Hit(±10)」を得る。',
    ],
    explanation: '脚部を使ったキック攻撃。重量の乗ったその攻撃は、思いのほか有効なことが多い。',
  },
  {
    key: '5',
    category: '2',
    name: 'クイックターン\n&\nアクセス速度調整',
    trigger: 'Trigger',
    cost: { type: '0' },
    effect: [
      'サーチ判定、ハッキング判定、マニューバ判定を行うとき、ダイスを振る前に使用を宣言できる。',
      '達成値を+3する。',
      '1シナリオにつき合計3回まで有効。',
    ],
    explanation:
      'クイックターン機能、アクセス速度調整機能の拡張。これによる機動力がアップし、索敵やオブジェクトに対するハッキング機能などが上昇する。',
  },
  {
    key: '6',
    category: '2',
    name: '追加弾倉常備',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「弾丸補充」1回分は収支ペナルティを受けない（使用回数には数える）。',
      'このスキルを持つ機体ではない、ほかの味方機体が弾数補充を実行した場合も有効。',
      'このスキルを持つ機体1体ごとに、1シナリオ1回まで有効。',
    ],
    explanation: 'あらかじめ予備追加弾倉を常備することにより、ミッション中での費用を抑える。',
  },
  {
    key: '7',
    category: '2',
    name: 'リペアキット常備',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「リペアキット使用」1回分は収支ペナルティを受けない（使用回数には数える）。',
      'このスキルを持つ機体ではない、ほかの味方機体がリペアキット使用を実行した場合も有効。',
      'このスキルを持つ機体1体ごとに、1シナリオ1回まで有効。',
    ],
    explanation: 'あらかじめ予備リペアキットを常備することにより、ミッション中での費用を抑える。',
  },
  {
    key: '8',
    category: '3',
    name: '臨機応変',
    trigger: 'Action',
    cost: { type: '1', dice: [2] },
    effect: ['ENダイスに1Dを追加する。', 'この効果は手番に1回まで有効。'],
    explanation: '様々な姿勢が可能な二脚だからこそ、臨機応変に立ち回ることができる。',
  },
  {
    key: '9',
    category: '3',
    name: 'バランスEN供給\n（ターン開始）',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'ターン開始時ENダイスを獲得した直後、出目を行動順カードによって振りなおしてもよい（持ち越しているENダイスの出目にも有効）。',
      '行動順カードが6~10の場合、出目を1つ選んで振りなおすことができる。',
      '行動順カードが2~5の場合、出目を1~2つ選んで振りなおすことができる。',
    ],
    explanation: '二脚ならではの、バランスのいいEN供給の技術。',
  },
  {
    key: '10',
    category: '3',
    name: '部位狙い\n（汎用）',
    trigger: 'Trigger',
    cost: { type: '1', dice: [1] },
    effect: [
      'アタックで部位決定ダイスを振るとき、コストを支払って使用を宣言できる（「火力タイプ：ブラスト」の武装では使用できない）。',
      '武装決定ダイスを1個振り足して、任意の出目一つを部位決定ダイスの出目として採用する。',
    ],
    explanation:
      'バランスのいい二脚だからこそ、どんな武装でも的確に狙いを定めることができる。その技術。',
  },
  {
    key: '11',
    category: '3',
    name: '高速リロード',
    trigger: 'Action',
    cost: { type: '1', dice: [2] },
    effect: [
      '手番中にすでにアタックした武装を一つ選ぶ。',
      '選んだ武装でもう一度アタックできるようになる。効果的用後、ENダイスに1Dを追加する。',
      '1ターンに1回まで有効。',
    ],
    explanation: 'リロード時間を短縮させるためのテクニック。',
  },
  {
    key: '12',
    category: '3',
    name: 'マニュアルエイム',
    trigger: 'Action',
    cost: { type: '1', dice: [1] },
    effect: [
      '手番中に次に行うアタック（「火力タイプ：メレー/ブラスト」を除く）は、一度だけ「威力補正： +10」の効果を得る。',
    ],
    explanation:
      'オート照準機能を使わずに、己の目と腕を信じて行う射撃技術。じっくりと腰を据えて射撃体勢を取ることで威力を上げる技術。',
  },
  {
    key: '13',
    category: '4',
    name: 'ターミナルアーマー',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'コアへの適用ダメージかAP損害を受けて部位全損しそうなとき、残り10で踏みとどまる。',
      '1シナリオに1回まで有効。',
    ],
    explanation:
      'コア拡張機能「ターミナルアーマー」を解禁し装備可能とする。機体AP限界で自動発動するパルス防御。',
  },
  {
    key: '14',
    category: '3',
    name: 'アサルトチャージ',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「移動（スキル効果による移動でもよい）」の直後に行うアタックは、一度だけ「威力補正：+10」を得る。',
      '移動1回につき1回まで有効。',
    ],
    explanation: 'アサルトブーストやクックブーストを活用した、突撃による戦闘技術。',
  },
  {
    key: '15',
    category: '3',
    name: 'ダブルアタック\n（腕武装）',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「腕武装R」と「腕武装」に同じ名称の武装を選択しているときだけ有効。',
      '腕武装でアタックしたとき、もう片方の腕武装の弾数を同じだけ消費することでそのアタックは「Hit数：+1」を得る。',
      '弾数のない腕武装ではこのスキルの効果は得られない。',
    ],
    explanation: 'アサルトブーストやクックブーストを活用した、突撃による戦闘技術。',
  },
  {
    key: '16',
    category: '3',
    name: '近接攻撃追随性能\n強制停止',
    trigger: 'Passive',
    cost: { type: '4' },
    effect: [
      '「カテゴリ：近接」の武装が未使用の場合、その武装のアタックパターンが持つ必要なダイスコストを消費し、同じ数だけENダイスを追加する。この時、出目をそれぞれ+1してもよい（最大6）。',
      'この時、ダイスコストを消費した近接武装は使用済みにならない。',
      '1ターンに1回まで有効',
    ],
    explanation:
      '近接武装の持つ「対象を自動的に追随する効果」を強制的にキャンセルすることで、戦いを有利に進めるテクニック。',
  },
  {
    key: '17',
    category: '4',
    name: 'アサルトアーマー',
    trigger: 'Action',
    cost: { type: '3', number: 2 },
    effect: [
      '同じエリアに存在しているすべてのエネミーをスタッガー状態にする。',
      '1シナリオに1回まで有効。',
    ],
    explanation:
      'コア拡張機能「アサルトアーマー」を解禁し装備可能とする。機体を中心としたパルス爆発であり、広範囲に衝撃を与える。',
  },
  {
    key: '18',
    category: '3',
    name: 'ジャンプ回避',
    trigger: 'Reaction',
    cost: { type: '1', dice: [2] },
    effect: [
      '適用されたヒットレートを1Hit分軽減する（通常の回避やクイックブースト回避を組み合わせてもよい）。',
      '効果的用後、ENダイスに1Dを追加する。',
      '一度のヒットレートに対して、1回まで有効。',
    ],
    explanation: '逆関節ならではの跳躍力を使った、回避のテクニック。着地後にさらなる行動力を得る。',
  },
  {
    key: '19',
    category: '3',
    name: '立体起動',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'ターン開始時、手番開始時ENダイスを獲得した直後、「出目：1」を1つ選んで振りなおすことができる（持ち越しているENダイスの出目にも有効）。',
      '加えて、非戦闘時の「被弾決定イベント」でダメージの軽減を行うとき、軽減判定に成功すると2Hit分の軽減になる（通常は1Hit分軽減）。',
    ],
    explanation:
      '逆関節ならではの跳躍力を利用した、無尽蔵に飛び回って相手をかく乱する行動テクニック。',
  },
  {
    key: '20',
    category: '3',
    name: '急降下攻撃',
    trigger: 'Action',
    cost: { type: '3', number: 3 },
    effect: [
      '「レンジ：1」にいるエネミー1体を対象とする。',
      '武装またはスキルにある「レンジ：0または1：のアタックパターンを1つ選び、アタックのための弾数を消費する（弾数消費なしの武装またはスキルを選択してもよい。その場合、弾数消費の代わりに、その武装を装備しているARMに「AP損害：20」を適応すること）。',
      '上記に選択したアタックパターンを「+1Hit」して、対象にダメージを与える。',
      '効果的用後、使用者は対象のいるエリアに強制的に「移動」する。',
    ],
    explanation:
      '逆関節ならではの跳躍力を利用した、無尽蔵に飛び回って相手をかく乱する行動テクニック。',
  },
  {
    key: '21',
    category: '3',
    name: 'サポートの達人',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「弾数補充」を同じエリアに存在する味方機体1体に対して使用できるようになる。',
      '加えて、下記の効果をそあれぞれ1シナリオ中に1回ずつ有効。',
      '使用する「リペアキット使用」の効果が、部位1つの任意のAP2Lineになる。',
      '使用する「弾数補充」の効果が、武装1つの任意の弾2Lineになる。',
    ],
    explanation: 'リペアキットや弾数補充のための機能を拡張した技術。',
  },
  {
    key: '22',
    category: '3',
    name: '援護射撃',
    trigger: 'Trigger',
    cost: { type: '1', dice: [1] },
    effect: [
      '同じエリアに存在する味方機体を「援護対象」とする。',
      '援護対象がアタックするとき、コスト（ダイスコスト：1/弾数コスト：援護対象が行ったアタックのレンジと同じアタックが可能な任意の武装の弾数◆）を支払って使用を宣言できる。',
      '援護対象が行うアタックは、回避不可になる。',
    ],
    explanation: '逆関節ならではの高機動力で、味方機体のマニューバ的行動をサポートする技術。',
  },
  {
    key: '23',
    category: '4',
    name: 'パルスプロテクション',
    trigger: 'Action',
    cost: { type: '3', number: 2 },
    effect: [
      'このActionを行ったエリアを「プロテクションエリア」とする。',
      'ターン終了まで「プロテクションエリア」に存在する部隊全員は、「防御性能：弾 10/爆 10/E 10」を得る。ターン終了時に、プロテクションエリアの効果は消える。',
      'この効果は重複しない。',
      '戦闘1回につき、1回まで使用可能。',
    ],
    explanation:
      'コア拡張機能「パルスプロテクション」を解禁し装備可能とする。空間設置型のパルス防壁を展開する。空間設置型のパルス防壁を展開する。',
  },
  {
    key: '24',
    category: '3',
    name: 'ホバリング滑空',
    trigger: 'Trigger',
    cost: { type: '1', dice: [3] },
    effect: [
      'ターン開始時ENダイスを獲得した直後、コストを支払うことでターン開始時まで「ホバリング」状態になる。',
      '',
      '「ホバリング状態」',
      '対空：「回避」を実行不能になる（クイックブースト回避のみ有効）。その代わり、どのアタックレートに対しても「1Hit」分を自動的に軽減する。',
      '直下攻撃：「レンジ：2」のアタックを「レンジ：1」で行うことができる。このときのアタックは「威力補正：+10」を得る。',
      '加えて、非戦闘時の「被弾イベント」でダメージの軽減を行うときに、ホバリング状態になるかどうかを選択してもよい。ホバリング状態になった場合、軽減判定の達成値を-1し、判定に成功すると2Hit分の軽減になる（通常は1Hit分軽減）。',
    ],
    explanation: '四脚ならではの、脚を開いた滑空性能。それを使った戦術。',
  },
  {
    key: '25',
    category: '3',
    name: '反動軽減\n（BGL/キャノン）',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「カテゴリ：BGL/キャノン」の武装でアタックを行ったとき、アタック処理後ENダイスに「出目：3」を追加する。',
    ],
    explanation:
      'バズーカ、グレネード、ランチャー、キャノンによる砲撃の反動を軽減する四脚だからこそのテクニック。',
  },
  {
    key: '26',
    category: '3',
    name: '雲隠れ',
    trigger: 'Action',
    cost: { type: '1', dice: [1, 1] },
    effect: [
      '行動順カードが「2~10」の手番のみ使用可能。',
      'ターン終了まで、戦場から自分の駒を取り除き、その場にいない扱いにする（エネミーや味方からのあらゆる効果の対象にならなくなる）。',
      'ターン終了時、または同じターンにもう一度手番が回ってきた場合、この効果を失いこのスキルを持つ機体を元いたエリアに戻す。',
    ],
    explanation:
      '障害物を利用したホバリング滑空で、エネミーからの目を避けるように行動する隠密技術。',
  },
  {
    key: '27',
    category: '3',
    name: 'ホバリング移動',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'ホバリング状態の場合、手番開始時に1回だけ「移動」をコストなしで行える。何らかの[Action]を実行すると、このスキルの効果は発揮できない。',
      'ホバリング移動を行った場合、ENダイスに「出目：2」を追加する。',
      'この効果でENダイスが最大数を超えた場合は、即座に調整すること。',
    ],
    explanation: 'ホバリング滑空中は、相手の弱点を見極めやすい。',
  },
  {
    key: '28',
    category: '3',
    name: '直下射撃+',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: ['ホバリング状態で「直下射撃」によるアタックを「威力補正：+20」に変更する。'],
    explanation: 'ホバリング滑空中は、相手の弱点を見極めやすい。',
  },
  {
    key: '29',
    category: '4',
    name: 'パルスアーマー',
    trigger: 'Trigger',
    cost: { type: '1', dice: [1] },
    effect: [
      'ダメージを適用されるときに使用を宣言できる（回避やほかのリアクションと併用可能）。',
      'ターン終了まで「防御性能：弾20 / 爆20 / E20」を得る。',
      '1シナリオに1回まで有効。',
    ],
    explanation:
      'コア拡張機能「パルスアーマー」を解禁し装備可能とする。機体追従型のパルス防壁を作り出し、一時的に防御性能を飛躍的に高める。',
  },
  {
    key: '30',
    category: '3',
    name: '部位狙い\n（レンジ1）',
    trigger: 'Trigger',
    cost: { type: '1', dice: [1] },
    effect: [
      '「レンジ：1（ホバリング滞空によってレンジが1に変更されたものも含む）」のアタックで部位決定ダイスを振るとき、コストを支払って使用を宣言できる（「火力タイプ：ブラスト」の武装では使用できない）。',
      '部位決定ダイスを1個振り足して、任意の出目1つを部位決定ダイスの出目として採用する。',
    ],
    explanation: '四つの脚でしっかりと体勢を確保し、的確に狙いを定める射撃技術。',
  },
  {
    key: '31',
    category: '3',
    name: 'ブリッツ',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'このスキル習得者のアタックによってエネミーを撃破したとき、またはエネミーがスタッガー状態になったとき、「レンジ：0 ~ 2」に存在するすべての味方機体（自身も含む）はENダイスに1Dを追加する（この1Dはそれぞれのパイロットが振る）。',
      'この効果でENダイスが最大数を超えた場合は、即座に調整すること。',
      'この効果は1ターンに1回のみ有効。',
    ],
    explanation:
      '相手をスタッガー状態にする予定で行動する電撃戦技術。そあれが成功した時、大きな余裕が生まれる。',
  },
  {
    key: '32',
    category: '3',
    name: '行動支援',
    trigger: 'Action',
    cost: { type: '1', dice: [1] },
    effect: [
      '同じエリアに存在する味方機体1体を対象とする。',
      '対象に「コストで消費したダイスの出目」のENダイスを1個追加する',
      '手番中に1回まで有効。',
    ],
    explanation: '部隊の行動を同調させて、作戦を上手に推進するための指揮テクニック。',
  },
  {
    key: '33',
    category: '3',
    name: 'ドリフトターン',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「移動」を行ったとき、ENダイスを1個振り足す（アサルトブースト移動などによる移動は含まない）。',
      '一度の手番処理ごとに1回まで。',
    ],
    explanation: '履帯だからこそできる、突進移動時の急速ターン技術。',
  },
  {
    key: '34',
    category: '3',
    name: '反動無効\n（BGL/キャノン）',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: ['「カテゴリ：BGL/キャノン」でアタックを行ったとき、ENダイスに1Dを追加する。'],
    explanation:
      'バズーカ、グレネード、ランチャー、キャノンに夜砲撃時の反動を無効にする、重量タンクだからこそのテクニック。',
  },
  {
    key: '35',
    category: '3',
    name: '高速移動',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '手番開始時、直後に1回だけ「移動」をコストなしで行える（ドリフトターンと組み合わせ可能）。ほかに[Action]を挟むと、このスキルの効果は発揮できない。',
    ],
    explanation: '軽量タンクだからこその、高機動力で自在に戦場を駆ける操縦技術。',
  },
  {
    key: '36',
    category: '3',
    name: '高機動射撃',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      'アタック（「タイプ：メレー」を除く）を行った直後、即座に「移動」をコストなしで行てもよい（ドリフトターンと組み合わせ可能）。',
    ],
    explanation: '軽量タンクならではの機動力を利用した、移動をしながら行う射撃技術。',
  },
  {
    key: '37',
    category: '3',
    name: '猛攻',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '弾数消費のある武装でアタックするとき、使用を宣言できる。',
      '弾数消費を2倍にすることで、発生するダメージを「威力補正：+10」する。',
    ],
    explanation: 'リロード時間を上手く効率化下、恐るべき攻撃方法。',
  },
  {
    key: '38',
    category: '3',
    name: '避弾経始',
    trigger: 'Trigger',
    cost: { type: '1', dice: [2] },
    effect: [
      'エネミーのアタックを受けて自身の被弾部位が決定した時、コストを支払うことで被弾部位を任意の別の部位に変更する。このスキルは「火力タイプ：ブラスト」のアタックに対しては使用できない。',
    ],
    explanation:
      '重装甲になりやすいタンクだからこその、被弾時に少し的をずらして装甲の暑いところにぶつける防御技術。',
  },
  {
    key: '39',
    category: '3',
    name: '存在感',
    trigger: 'Trigger',
    cost: { type: '1', dice: [2] },
    effect: [
      'エネミーのアタック対象の範囲に含まれていて、その範囲に複数のがいる場合、エネミーのアタック対象を決定するとき、コストを支払うことで自身を「3体分」としてアタック対象を決定させる。',
    ],
    explanation:
      '巨大になりやすい重量タンクだからこその存在感を示し、エネミーからの狙われ率を上げる戦術。',
  },
  {
    key: '40',
    category: '3',
    name: 'ダブルアタック\n（肩武装）',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「肩武装R」と「肩武装L」に同じ名称の武装を選択しているときだけ有効。',
      '肩武装でアタックした時、もうひとつの肩武装の弾数をお暗示だけ消費することで、そのアタックは「Hit数：+1」を得る。',
      'このスキルは「カテゴリ：その他」の武装では効果を発揮しない。',
    ],
    explanation: '肩武装に同じ武装を装備しているときにだけできる、連続攻撃のテクニック。',
  },
  {
    key: '41',
    category: '3',
    name: 'ヒット&アウェイ',
    trigger: 'Passive',
    cost: { type: '0' },
    effect: [
      '「カテゴリ：近接」の武装でアタックを行った直後、即座に「移動」をコストなしで行ってもよい（急降下攻撃などのスキルによるアタックも含む）。',
    ],
    explanation: '逆関節ならではの跳躍力を利用した、機動力のある近接攻撃テクニック。',
  },
]);

export const osSkillList = $state.raw([
  {
    legType: '0',
    skills: [
      {
        type: 0,
        name: 'オールレンジ型',
        dedicatedSkills: ['8', '9', '10', '11', '12'],
        coreSkill: '13',
      },
      {
        type: 1,
        name: '強襲型',
        dedicatedSkills: ['8', '9', '14', '15', '16'],
        coreSkill: '17',
      },
    ],
  },
  {
    legType: '1',
    skills: [
      {
        type: 0,
        name: '強襲型',
        dedicatedSkills: ['18', '19', '20', '41', '16'],
        coreSkill: '29',
      },
      {
        type: 1,
        name: '支援型',
        dedicatedSkills: ['18', '19', '11', '21', '22'],
        coreSkill: '23',
      },
    ],
  },
  {
    legType: '2',
    skills: [
      {
        type: 0,
        name: '爆撃型',
        dedicatedSkills: ['24', '25', '26', '27', '28'],
        coreSkill: '29',
      },
      {
        type: 1,
        name: '支援型',
        dedicatedSkills: ['24', '25', '30', '31', '32'],
        coreSkill: '13',
      },
    ],
  },
  {
    legType: '3',
    skills: [
      {
        type: 0,
        name: '高機動型',
        dedicatedSkills: ['33', '34', '35', '36', '37'],
        coreSkill: '17',
      },
      {
        type: 1,
        name: '重量型',
        dedicatedSkills: ['33', '34', '38', '39', '40'],
        coreSkill: '23',
      },
    ],
  },
]);
