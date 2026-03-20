# HTML Slide Template

Complete HTML structure with navigation, tokens, and Chart.js integration.

## Base Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentation Title</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
    <style>
        :root {
            --color-primary: #FF6B6B;
            --color-background: #0D0D0D;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: var(--color-background);
            color: #fff;
            font-family: var(--typography-font-body, 'Inter', sans-serif);
            overflow: hidden;
        }

        .slide-deck {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }

        @media (min-width: 769px) {
            .slide-deck {
                max-width: calc(100vh * 16 / 9);
                max-height: calc(100vw * 9 / 16);
                margin: auto;
                position: absolute;
                inset: 0;
            }
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 60px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s;
            background: var(--color-background);
            overflow: hidden;
        }

        .slide.active { opacity: 1; visibility: visible; }

        .slide-content {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
        }

        h1, h2 { font-family: var(--typography-font-heading, 'Space Grotesk', sans-serif); }
        .slide-title {
            font-size: clamp(32px, 6vw, 80px);
            background: var(--primitive-gradient-primary, linear-gradient(135deg, #FF6B6B, #FF8E53));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.1;
        }

        @media (max-width: 768px) {
            .slide { padding: 32px 24px; }
            .slide-title { font-size: clamp(28px, 5vw, 48px); }
            h2 { font-size: clamp(20px, 4vw, 32px); }
            p, li { font-size: clamp(14px, 2.5vw, 18px); }
        }

        @media (max-width: 480px) {
            .slide { padding: 24px 16px; }
            .slide-title { font-size: clamp(22px, 6vw, 36px); }
            h2 { font-size: clamp(18px, 4.5vw, 28px); }
            p, li { font-size: clamp(12px, 3vw, 16px); }
            .nav-controls { bottom: 16px; gap: 12px; }
            .nav-btn { width: 32px; height: 32px; font-size: 14px; }
        }

        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: var(--color-primary);
            transition: width 0.3s;
            z-index: 1000;
        }
    </style>
</head>
<body>
    <div class="progress-bar" id="progressBar"></div>
    <div class="slide-deck">
        <div class="slide active">
            <div class="slide-content">
                <h1 class="slide-title">Title Slide</h1>
                <p>Subtitle or tagline</p>
            </div>
        </div>
    </div>
</body>
</html>
```

## Chart.js Integration

```html
<div class="chart-container" style="width: min(80%, 600px); height: clamp(200px, 40vh, 350px);">
    <canvas id="revenueChart"></canvas>
</div>
```

## Animation Classes

Use the slide animations consistently and keep motion tied to meaning.
