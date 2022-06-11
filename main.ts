radio.onReceivedNumber(function (receivedNumber) {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    if (receivedNumber == 11) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
    } else if (receivedNumber == 13) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 120)
    } else if (receivedNumber == ArrowNames.South) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 60)
    } else if (receivedNumber == ArrowNames.North) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -60)
    } else if (receivedNumber == ArrowNames.West) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 18)
    } else if (receivedNumber == ArrowNames.East) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -18)
    } else if (receivedNumber == 14) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 40)
    } else if (receivedNumber == 12) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -40)
    } else {
        wuKong.setLightMode(wuKong.LightMode.OFF)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        wuKong.stopAllMotor()
        wuKong.setLightMode(wuKong.LightMode.OFF)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Surprised)
