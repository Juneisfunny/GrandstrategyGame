var AnimationLambda = 0
var AnimationTick = 0
var AnimationWave = 0


function AnimationTicks() {
    if (AnimationTick == 2) {
        switch (AnimationWave) {
            case (0):
                AnimationLambda = AnimationLambda + WaveSpeed
                if (AnimationLambda >= SeaRoughness) {
                    AnimationWave = 1;
                }
                break;

            case (1):
                AnimationLambda = AnimationLambda - WaveSpeed
                if (AnimationLambda <= -SeaRoughness) {
                    AnimationWave = 0;
                }
                break;
        }
        AnimationTick = 0;
    }
    AnimationTick++

}

function PredetermineWavePlacement() {
    //lol, lmao
    for (x = 0; x != WaveCoastLine.length; x++) {
        ctx.fillRect(TerrList[index].posX + cameraX + (i * 10), TerrList[index].posY + cameraY + (a * 10), 10, 10)
    }
}

function DrawWavesNew() {

}