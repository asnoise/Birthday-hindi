<!DOCTYPE html>
<html lang="hi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>  </title>
    <!-- Social Media Sharing Tags -->
    <meta property="og:title" content="   ! ">
    <meta property="og:description" content="           !">
    <meta property="og:image" content="https://i.imgur.com/8Q5oG8r.gif"> <!-- Yahan aap online GIF ka link daal sakte hain -->

    <style>
        /* Importing festive fonts from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:wght@400;700&family=Great+Vibes&display=swap');

        body {
            margin: 0;
            font-family: 'Tiro Devanagari Hindi', serif;
            background: radial-gradient(ellipse at bottom, #B45309 0%, #2A0808 100%);
            color: #fff;
            text-align: center;
            overflow-x: hidden;
        }

        #fireworks-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .container {
            position: relative;
            z-index: 10;
            max-width: 550px;
            margin: 30px auto;
            background: rgba(0, 0, 0, 0.4);
            padding: 25px;
            border-radius: 20px;
            border: 3px solid #FFD700;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.7), inset 0 0 15px rgba(255, 215, 0, 0.3);
        }

        #laxmi-gif {
            max-width: 70%;
            height: auto;
            border-radius: 15px;
            margin-bottom: 20px;
            border: 4px solid #ffac33;
            box-shadow: 0 0 20px #ffac33;
        }

        h1 {
            font-family: 'Great Vibes', cursive;
            font-size: 3.5em;
            color: #FFD700;
            margin: 10px 0;
            text-shadow: 0 0 10px #FFD700, 0 0 20px #FF4500;
            animation: glow 1.5s ease-in-out infinite alternate;
        }

        #from-message {
            font-size: 1.8em;
            margin: 20px 0;
            color: #fefae0;
            line-height: 1.5;
        }

        .sender-name {
            color: #ffc107;
            font-weight: bold;
            font-family: 'Tiro Devanagari Hindi', serif;
            font-size: 1.2em;
        }

        .input-section {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }

        .input-section p {
            margin: 0 0 15px 0;
            font-size: 1.4em;
            color: #fefae0;
        }

        #name-input {
            width: 80%;
            padding: 12px;
            border-radius: 25px;
            border: 2px solid #FFD700;
            background-color: #fff;
            color: #333;
            font-size: 1.1em;
            text-align: center;
            font-family: 'Tiro Devanagari Hindi', serif;
        }

        #generate-and-share-btn {
            display: inline-flex;
            /* Use inline-flex for better alignment */
            align-items: center;
            justify-content: center;
            gap: 12px;
            /* Space between icon and text */
            width: 85%;
            margin: 20px auto 0;
            padding: 15px;
            font-size: 1.3em;
            font-weight: bold;
            color: #fff;
            /* White text for better contrast on green */
            background: linear-gradient(45deg, #25D366, #128C7E);
            /* WhatsApp green gradient */
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            font-family: 'Tiro Devanagari Hindi', serif;
        }

        #generate-and-share-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        #generate-and-share-btn svg {
            width: 28px;
            /* Slightly larger icon */
            height: 28px;
        }

        /* Fallback section for desktops */
        #result-section {
            margin-top: 20px;
            display: none;
        }

        #generated-link {
            width: 90%;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid #FFD700;
        }

        #copy-btn {
            padding: 10px 20px;
            margin-top: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Tiro Devanagari Hindi', serif;
            font-size: 1.1em;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 10px #FFD700, 0 0 20px #FF4500;
            }

            to {
                text-shadow: 0 0 20px #FFD700, 0 0 30px #FF4500, 0 0 40px #FF4500;
            }
        }

        /* --- STYLE FOR AD CONTAINER (  ) --- */
        #ad-container {
            width: 100%;
            margin-top: 25px;
            /*    */
            margin-bottom: 20px;
            /*    */
            text-align: center;
            /*        */
            position: relative;
            z-index: 20;
            /*            */
        }
    </style>
</head>

<body>

    <canvas id="fireworks-canvas"></canvas>

    <div class="container">
        <img id="laxmi-gif" src="laxmi.gif" alt="Happy Diwali Animation">

        <h1 id="greeting">Happy Diwali</h1>
        <h2 id="from-message"></h2>

        <div class="input-section">
            <p>    </p>
            <input type="text" id="name-input" placeholder="   ">
            <!-- Updated Button with WhatsApp Icon -->
            <button id="generate-and-share-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-26.7l-7.1-4.2-72.2 18.9 19.3-70.3-4.6-7.4c-18.7-30.6-28.6-66.3-28.6-103.9 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.8-16.2-54.3-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>WhatsApp   </span>
            </button>
        </div>

        <div id="result-section">
            <p id="fallback-message">      :</p>
            <input type="text" id="generated-link" readonly>
            <button id="copy-btn"> </button>
        </div>
    </div>

    <!-- === ADVERTISEMENT CODE START (  ) === -->
    <div id="ad-container">
        <script type="text/javascript">
            atOptions = {
                'key': 'c799e3104d24feee881ba4e44a43aaa9',
                'format': 'iframe',
                'height': 50,
                'width': 320,
                'params': {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/c799e3104d24feee881ba4e44a43aaa9/invoke.js"></script>
    </div>
    <!-- === ADVERTISEMENT CODE END === -->


    <script>
        // --- FIREWORKS SCRIPT ---
        const canvas = document.getElementById('fireworks-canvas');
        const ctx = canvas.getContext('2d');
        let fireworks = [];
        let particles = [];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function Firework(sx, sy, tx, ty) {
            this.x = sx;
            this.y = sy;
            this.sx = sx;
            this.sy = sy;
            this.tx = tx;
            this.ty = ty;
            this.distanceToTarget = Math.sqrt(Math.pow(tx - sx, 2) + Math.pow(ty - sy, 2));
            this.distanceTraveled = 0;
            this.coordinates = [];
            this.coordinateCount = 3;
            while (this.coordinateCount--) {
                this.coordinates.push([this.x, this.y]);
            }
            this.angle = Math.atan2(ty - sy, tx - sx);
            this.speed = 2;
            this.acceleration = 1.05;
            this.brightness = Math.random() * 50 + 50;
            this.targetRadius = 1;
        }
        Firework.prototype.update = function(index) {
            this.coordinates.pop();
            this.coordinates.unshift([this.x, this.y]);
            if (this.targetRadius < 8) {
                this.targetRadius += 0.3;
            } else {
                this.targetRadius = 1;
            }
            this.speed *= this.acceleration;
            let vx = Math.cos(this.angle) * this.speed;
            let vy = Math.sin(this.angle) * this.speed;
            this.distanceTraveled = Math.sqrt(Math.pow(this.x - this.sx, 2) + Math.pow(this.y - this.sy, 2));
            if (this.distanceTraveled >= this.distanceToTarget) {
                createParticles(this.tx, this.ty);
                fireworks.splice(index, 1);
            } else {
                this.x += vx;
                this.y += vy;
            }
        };
        Firework.prototype.draw = function() {
            ctx.beginPath();
            ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = 'hsl(' + Math.random() * 360 + ', 100%, ' + this.brightness + '%)';
            ctx.stroke();
        };

        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.coordinates = [];
            this.coordinateCount = 5;
            while (this.coordinateCount--) {
                this.coordinates.push([this.x, this.y]);
            }
            this.angle = Math.random() * Math.PI * 2;
            this.speed = Math.random() * 10 + 1;
            this.friction = 0.95;
            this.gravity = 1;
            this.hue = Math.random() * 360;
            this.brightness = Math.random() * 50 + 50;
            this.alpha = 1;
            this.decay = Math.random() * 0.03 + 0.015;
        }
        Particle.prototype.update = function(index) {
            this.coordinates.pop();
            this.coordinates.unshift([this.x, this.y]);
            this.speed *= this.friction;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed + this.gravity;
            this.alpha -= this.decay;
            if (this.alpha <= this.decay) {
                particles.splice(index, 1);
            }
        };
        Particle.prototype.draw = function() {
            ctx.beginPath();
            ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
            ctx.stroke();
        };

        function createParticles(x, y) {
            let particleCount = 30;
            while (particleCount--) {
                particles.push(new Particle(x, y));
            }
        }

        function loop() {
            requestAnimationFrame(loop);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].draw();
                fireworks[i].update(i);
            }
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].draw();
                particles[i].update(i);
            }

            // Firework frequency increased 3x (from 0.05 to 0.15)
            if (Math.random() < 0.15) {
                fireworks.push(new Firework(canvas.width / 2, canvas.height, Math.random() * canvas.width, Math.random() * canvas.height / 2));
            }
        }
        window.onload = loop;
        window.onresize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // --- WISHING LINK SCRIPT ---
        document.addEventListener('DOMContentLoaded', function() {
            const greetingElement = document.getElementById('greeting');
            const fromMessageElement = document.getElementById('from-message');
            const nameInputElement = document.getElementById('name-input');
            const generateBtn = document.getElementById('generate-and-share-btn');
            const resultSection = document.getElementById('result-section');
            const generatedLinkInput = document.getElementById('generated-link');
            const copyBtn = document.getElementById('copy-btn');
            const fallbackMessage = document.getElementById('fallback-message');

            const urlParams = new URLSearchParams(window.location.search);
            const fromName = urlParams.get('from');
            if (fromName) {
                const decodedName = decodeURIComponent(fromName.replace(/\+/g, ' '));
                greetingElement.textContent = `Happy Diwali!`;
                fromMessageElement.innerHTML = `<span class="sender-name">${decodedName}</span>       !`;
            } else {
                greetingElement.textContent = ' ';
                fromMessageElement.textContent = '     ,    ';
            }

            generateBtn.addEventListener('click', async function() {
                const name = nameInputElement.value.trim();
                if (name === '') {
                    alert('   !');
                    return;
                }

                const baseURL = window.location.origin + window.location.pathname;
                const shareableLink = `${baseURL}?from=${encodeURIComponent(name)}`;

                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: '  !',
                            text: `${name}       !     :`,
                            url: shareableLink,
                        });
                    } catch (error) {
                        console.log('Error sharing:', error);
                        if (error.name !== 'AbortError') {
                            showFallback(shareableLink);
                        }
                    }
                } else {
                    showFallback(shareableLink);
                }
            });

            function showFallback(link) {
                fallbackMessage.textContent = '  -         :';
                generatedLinkInput.value = link;
                resultSection.style.display = 'block';
            }

            copyBtn.addEventListener('click', function() {
                generatedLinkInput.select();
                navigator.clipboard.writeText(generatedLinkInput.value).then(() => {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = ' ';
                    }, 2000);
                }).catch(err => {
                    alert('    ');
                });
            });
        });
    </script>

</body>
</html>
