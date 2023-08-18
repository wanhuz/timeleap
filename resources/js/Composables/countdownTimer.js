export function CountDownTimer(duration, granularity) {
    this.duration = duration;
    this.granularity = granularity || 1000;
    this.tickFtns = []; 
    this.running = false;
    this.timeoutId = 0;
    this.diff = 0;
}

CountDownTimer.prototype.set = function(secs) {
    this.duration = secs;
}

CountDownTimer.prototype.stop = function() {
    this.running = false;
    clearTimeout(this.timeoutId)
}

CountDownTimer.prototype.start = function() {
    if (this.running) {
        return;
    }

    this.running = true;
    let start = Date.now() 
    let that = this;
    let diff, obj;

    (function timer() {
        diff = that.duration - (((Date.now() - start) / 1000) | 0);
        that.diff = that.duration - diff
        
        if (diff > 0) {
            that.timeoutId = setTimeout(timer, that.granularity)
        } else {
            diff = 0;
            that.running = false;
        }

        obj = CountDownTimer.parse(diff);
        that.tickFtns.forEach(function(ftn) {
            ftn.call(this, obj.minutes, obj.seconds);
        }, that);
    }());   
}

CountDownTimer.parse = function(seconds) {
    return {
        'minutes' : (seconds / 60) | 0,
        'seconds' : (seconds % 60) | 0
    };
};

CountDownTimer.prototype.onTick = function(ftn) {
    if (typeof ftn === 'function') {
        this.tickFtns.push(ftn);
    }
    return this;
}

CountDownTimer.prototype.expired = function() {
    return !this.running;
}