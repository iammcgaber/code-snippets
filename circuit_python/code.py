from adafruit_circuitplayground.express import cpx
import board
import math

cpx.pixels.fill((0, 0, 0))
cpx.pixels.show()

pos = 0  # Starting center position of pupil
increment = 2 * 3.14 / 10  # distance between pixels in radians
MomentumH = 0  # horizontal component of pupil rotational inertia
MomentumV = 0  # vertical component of pupil rotational inertia
 
# Tuning constants. (a.k.a. "Fudge Factors)  
# These can be tweaked to adjust the liveliness and sensitivity of the eyes.
friction = 0.90  # frictional damping constant.  1.0 is no friction.
swing = 10  # arbitrary divisor for gravitational force
gravity = 50  # arbitrary divisor for lateral acceleration
halfWidth = 1.25  # half-width of pupil (in pixels)
Pi = 3.14  # Pi for calculations - not the raspberry type

# x is left and right orientation
#   negative is the left side tilting down
#   positive is the right side tilting down

# y is the forward back orientation
#   negative is the plug side tilted down
#   positive is the plug side tilted up

# z is the vertical orientation
#   upright is max-positive (sitting flat is 9)
#   sideways is ~0
#   upsidedown is max-negative (upside down is -9)

while True:
    x_float, y_float, z_float = cpx.acceleration  # read accelerometer  
    x = int(x_float)  # make int of it
    y = int(y_float)
    z = int(z_float)

    if cpx.switch:
        # print live accelerometer data
        print("x, y, z = ", x, " ", y, " ", z)
        if math.fabs(x) < 3 and y > 3:
           cpx.pixels[0] = (255, 0, 0)
           cpx.pixels[9] = (255, 0, 0)
        elif x > 3 and math.fabs(y) < 3:
            cpx.pixels[6] = (255, 0, 0)
            cpx.pixels[7] = (255, 0, 0)        
            cpx.pixels[8] = (255, 0, 0)
        elif math.fabs(x) < 3 and y < -3:
            cpx.pixels[4] = (255, 0, 0)
            cpx.pixels[5] = (255, 0, 0)        
        elif x < -3 and math.fabs(y) < 3:
            cpx.pixels[1] = (255, 0, 0)
            cpx.pixels[2] = (255, 0, 0)        
            cpx.pixels[3] = (255, 0, 0)
        else:
            cpx.pixels.fill((0, 0, 0))
            cpx.pixels.show()
   # when slide switch right
    else:
        # Calculate the horizontal and vertical effect on the virtual pendulum
        # 'pos' is a pixel address, so we multiply by 'increment' to get radians.
        TorqueH = math.cos(pos * increment)  # peaks at top and bottom of the swing
        TorqueV = math.sin(pos * increment)  # peaks when the pendulum is horizontal
    
        # Add the incremental acceleration to the existing momentum
        MomentumH += TorqueH * x_float / swing
        MomentumV += TorqueV * y_float / gravity
    
        # apply a little frictional damping to keep things in control
        MomentumH *= friction
        MomentumV *= friction

        # Calculate the new position
        pos += MomentumH + MomentumV
   
        # handle the wrap-arounds at the top
        while (round(pos) < -1): 
            pos += 11.0
        while (round(pos) > 10): 
            pos -= 11.0
 
        # Now re-compute the display
        for i in range(10):
            # Compute the distance bewteen the pixel and the center
            # point of the virtual pendulum.
            diff = i - pos
            # Light up nearby cpx.pixels proportional to their proximity to 'pos'
            if (math.fabs(diff) <= halfWidth):
                proximity = halfWidth - math.fabs(diff) * 200
                # pick a color based on heading & proximity to 'pos'
                cpx.pixels[i] = [int(proximity), 0, 0]
            else:  # all others are off
                cpx.pixels[i] = ((0, 0, 0))
        cpx.pixels.show()