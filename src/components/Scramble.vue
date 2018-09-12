<template>
    <div class="container" @keyup="keyup">
        <div class="row">
            <div class="col-6 offset-3">
                <h2>{{scramble}}</h2>
                <h1>{{timeStr}}</h1>
                <ul>
                    <li v-for="t in times"  :key="t['.key']">
                        {{convertTime(t.time)}}
                        <a @click="deleteTime(t['.key'])">delete</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Scrambo from 'scrambo'
import db from './firebaseInit'
export default {
    name: 'scramble',
    firebase: {
        times: db.times
    },
    data () {
        return {
            time: 0,
            timeStr: '0:00.00',
            timer: null,
            scramb: this.getScramble(),
            started: false
        }
    },
    computed: {
        scramble: {
            get: function() {
                return this.scramb;
            },
            set: function(newVal) {
                this.scramb = newVal;
            }
        }
    },
    methods: {
        getScramble () {	
            var scrambo = new Scrambo().type('444').seed(5).get();
            return scrambo[0];
        },
        startTimer () {
            this.started = true;
            this.time = 0;
            this.keepTiming();
        },
        keepTiming () {
            this.timer = setTimeout(() => {
                this.time += 10;
                this.timeStr = this.convertTime(this.time);
                this.keepTiming();
            }, 10);
        },
        endTimer () {
            var data = {
                time: this.time,
                scramble: this.scramble,
                date: Date.now()
            }
            db.times.push(data);
            this.scramble = this.getScramble();
            clearTimeout(this.timer);
        },
        convertTime (millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(2);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },
        keyup (e) {
            if ((e.key === ' ' || e.key === 'Spacebar') && !this.started) {
                // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
                e.preventDefault()
                this.startTimer();
            } else {
                this.started = false;
                this.endTimer();
            }
        },
        deleteTime (val) {
            db.times.child(val).remove();
        }
    },
    created: function () {
            window.addEventListener('keyup', this.keyup)
    }
}
</script>

<style>

</style>
