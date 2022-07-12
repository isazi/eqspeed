
var isPaused;

function evaluate(input, output)
{
  if ( isPaused )
  {
    return;
  }
  output.eqSPEED = (((input.distance / 1000) + input.ascent) / 100) / (input.duration / 3600)
}

function onLoad(input, output)
{
  isPaused = true;
  output.eqSPEED = 0.0;
}

function onExerciseStart()
{
  isPaused = false;
}

function onExercisePause()
{
  isPaused = true;
}

function onExerciseContinue()
{
  isPaused = false;
}

function getUserInterface(info)
{
  return {
    template: 'template-{zapp_disp}'
  };
}

// This is called also when user backs from exercise start panel without starting
// exercise. onExerciseEnd() is not working at all as zapp gets disabled before
// it is called (and it would be called only when exercise is really started).
function getSummaryOutputs(input, output)
{
  return [{
    id: "myzapp01.eqSPEED",
    name: "Carlo's eqSPEED",
    format: "Speed_Threedigits",
    value: output.eqSPEED
  }];
}
