robotbit.MotorRunDual(
robotbit.Motors.M1A,
0,
robotbit.Motors.M1B,
0
)
basic.forever(function () {
    if (robotbit.HoleUltrasonic(DigitalPin.P15) < 30) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M1B,
        150
        )
    }
})
