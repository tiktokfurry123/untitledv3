input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(
    WaveShape.Noise,
    5000,
    5000,
    255,
    255,
    9999,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
