//1.4.2 -- new
var b4 = d;
(function (e, f) {
    var b1 = d,
        g = e();
    while (!![]) {
        try {
            var h = parseInt(b1(0x258)) / 0x1 * (parseInt(b1(0x204)) / 0x2) + parseInt(b1(0x23b)) / 0x3 + -parseInt(b1(0x25d)) / 0x4 * (parseInt(b1(0x1cf)) / 0x5) + -parseInt(b1(0x2de)) / 0x6 * (-parseInt(b1(0x2a4)) / 0x7) + -parseInt(b1(0x194)) / 0x8 + parseInt(b1(0x220)) / 0x9 + parseInt(b1(0x284)) / 0xa * (-parseInt(b1(0x1ab)) / 0xb);
            if (h === f) break;
            else g['push'](g['shift']());
        } catch (i) {
            g['push'](g['shift']());
        }
    }
}(c, 0xa97a0));
var b = (function () {
        var e = !![];
        return function (f, g) {
            var h = e ? function () {
                var b2 = d;
                if (g) {
                    if (b2(0x212) === b2(0x212)) {
                        var i = g['apply'](f, arguments);
                        return g = null, i;
                    } else i['log'](b2(0x2b1) + j), k[b2(0x2a8)][b2(0x2c4)](this[b2(0x1ff)], b2(0x2a6), l);
                }
            } : function () {};
            return e = ![], h;
        };
    }()),
    a = b(this, function () {
        var b3 = d;
        return a[b3(0x24b)]()['search'](b3(0x21b))[b3(0x24b)]()[b3(0x1ed)](a)[b3(0x1fe)](b3(0x21b));
    });
a();
var script = document['createElement'](b4(0x263));
script['onload'] = function () {
    var b5 = b4;
    cv[b5(0x1cb)](e => {
        var b6 = b5;
        if ('dEUSv' !== b6(0x26c)) {
            ;
            window['cv'] = e, window[b6(0x242)] = new ImageTracker(), window['addEventListener']('resize', window[b6(0x242)][b6(0x1de)], !![]), document[b6(0x192)]('startCameraBtn')[b6(0x1c2)][b6(0x24e)] = b6(0x1e2);
        } else {
            k[b6(0x250)] = l[b6(0x225)], m[b6(0x256)] = n[b6(0x2a5)](o[b6(0x250)] * p[b6(0x229)]);;
        }
    });
}, script[b4(0x1c5)] = b4(0x259), document['body'][b4(0x21e)](script);

function d(a, b) {
    var e = c();
    return d = function (f, g) {
        f = f - 0x190;
        var h = e[f];
        return h;
    }, d(a, b);
}
class ImageTracker {
    #
    p000;#
    p001;#
    p002;#
    p003;#
    p004;#
    p005;#
    p006;#
    p007;#
    p008;#
    p009;#
    p010;#
    p011;#
    p012;#
    p013;#
    p014;#
    p015;#
    p016;#
    p017;#
    p018;#
    p019;#
    p020;#
    p021;#
    p022;#
    p023;#
    p024;#
    p025;#
    p026;#
    p027;#
    p028;#
    p029;#
    p030;#
    p031;#
    p032;#
    p033;#
    p034;#
    p035;#
    p036;#
    p037;#
    p038;#
    p039;#
    p040;#
    p041;#
    p042;#
    p043;#
    p044;#
    p045;#
    p046;#
    p047;#
    p048;#
    p049;#
    p050;#
    p051;#
    p052;#
    p053;#
    p054;#
    p055;#
    p056;
    constructor() {
        var b7 = b4;;
        this[b7(0x1a4)] = 0x1, this[b7(0x1ff)] = 'Tracker', this[b7(0x20f)] = 0x1e, this['MAX_AREA'] = 0x9c40, this['MAX_PIXELS'] = window['ITRACKER_GLOBALS'] && window[b7(0x22f)]['MAX_PIXELS'] ? window[b7(0x22f)][b7(0x225)] : 0x1c2, this[b7(0x2e6)] = window[b7(0x22f)] && window[b7(0x22f)][b7(0x2e6)] ? window['ITRACKER_GLOBALS'][b7(0x2e6)] : 0x5dc0, this[b7(0x249)] = ![], this[b7(0x1fc)] = 0xc8, this.#p001 = 0x96, this.#p002 = 0.5, this.#p003 = 0.8, this.#p004 = 0x5, this.#p005 = 0.6, this.#p006 = 0xa, this.#p007 = 0.8, this.#p008 = 0xa, this[b7(0x1ee)] = 0x1, this.#p009 = 0xa, this.#p031 = 0xf, this.#p032 = 0x30, this.#p035 = 0xf, this.#p036 = 0x18, this.#p014 = !![], this[b7(0x1ad)] = 0x19, this.#p015 = 0.001, this.#p016 = 0.001, this.#p040 = 0.0002, this.#p041 = 0.99, this.#p042 = 0.002, this.#p043 = 0.85, this.#p017 = 0.2, this.#p018 = 0.2, this.#p033 = 0.05, this.#p034 = 0.65;;
        this.#p021 = 0x1f4, this.#p048 = new cv[(b7(0x2e1))](), this.#p050 = new cv[(b7(0x2e1))](), this.#p052 = new cv[(b7(0x1d2))](cv[b7(0x2ab)]), this.#p049 = new cv[(b7(0x1c7))](this.#p021), this.#p051 = new cv[(b7(0x1c7))](this.#p021), this.#p053 = new cv['BFMatcher'](cv[b7(0x251)]);;
        this.#f007(() => {
            var b8 = b7;
            if (b8(0x27b) === b8(0x1da)) {
                if (g);
                return h;
            } else {
                var e = this.#p055[b8(0x1ed)](b8(0x254));;
            }
        });
        if (this[b7(0x249)]) this['debugChooseCam']();
        this.#p022 = !![], this.#p023 = 0.075, this.#p024 = 0.075, this.#p025 = 0.00001, this.#p026 = 0x1, this.#p027 = 0x1, this.#p028 = 0.00001, this.#p029 = 0x1, this.#p030 = 0x1, this['resize'](), this[b7(0x29b)] = 0x0, this[b7(0x200)]();
    } [b4(0x2c2)](e) {
        var b9 = b4;
        iTracker[b9(0x20f)] = e, clearInterval(iTracker.#p037), iTracker.#p037 = setInterval(iTracker.#f002, 0x1 / iTracker[b9(0x20f)] * 0x3e8, iTracker['VIDEO'], iTracker['CANVAS'], iTracker['CTX']);
    } [b4(0x19a)](e, f) {
        var ba = b4;
        this[ba(0x262)] = e[ba(0x27d)](','), this[ba(0x28b)] = !![], this['TRACKER_NAME'] = f;
    } [b4(0x267)]() {
        var bb = b4;
        this['isStarted'] = ![];
        var e = this.#p055['constructor']('true');
        Object['keys'](e['tracked'])[bb(0x2d8)](f => {
            this.#f006(f);
        });
    } [b4(0x27e)]() {
        var bc = b4;
        this['cameraPaused'] = !![], this[bc(0x26b)][bc(0x1b4)]();
    } [b4(0x1f4)]() {
        var bd = b4;
        this[bd(0x2e2)] = ![], this['VIDEO']['play']();
    } [b4(0x206)](e) {
        var be = b4,
            f = this.#p055[be(0x1ed)](be(0x254)),
            g = Object[be(0x238)](f[be(0x195)]);
        return g[be(0x1a2)](e);
    } ['setTrackerSettings'](e, f = b4(0x24d)) {
        var bf = b4;
        this.#f001(f);;
        var g = JSON[bf(0x205)](e);
        Object[bf(0x238)](g)[bf(0x2d8)](h => {
            var bg = bf;
            if (h in this && this[h] != g[h]) {
                if (bg(0x271) !== bg(0x271)) f[bg(0x203)]['delete']();
                else {
                    this[h] = g[h];;
                }
            }
        }), this['TRACK_TARGET_MATCH_COUNT'] = 0x28, this[bf(0x26a)](), this[bf(0x2c2)](this['FRAMERATE']);
    }#
    f001(e) {
        var bi = b4,
            f = () => {
                var i = {};
                return function () {
                    var bh = d;
                    if ('nhbTO' !== bh(0x236)) i[bh(0x1c2)][bh(0x19d)] = j * k[bh(0x1a7)]()[bh(0x1a3)] * l + 'px';
                    else {
                        if (arguments[bh(0x2a9)] == 0x1) return i[arguments[0x0]];
                        arguments[bh(0x2a9)] == 0x2 && (i[arguments[0x0]] = arguments[0x1]);
                    }
                };
            },
            g = e[bi(0x27d)]('.'),
            h = g[0x0] + '.' + g[0x1] + '.' + g[0x2];
        this.#p056 = new(f())(), this.#p056['id'] = h, this.#p056[bi(0x1ed)](bi(0x254), e);
    } [b4(0x2d3)](e) {
        var bj = b4;
        !e && this.#f042('debugImageTarget');
        var f = this.#p055[bj(0x1ed)](bj(0x254)),
            g = f[bj(0x2dc)][e];
        if (g) {
            ;
            this.#f013(g[bj(0x1b6)], g['kp'], bj(0x2d3));
        } else 'FTkrz' !== bj(0x201) ? this.#f042('debugImageTarget') : i['kind'] === bj(0x2ce) && !j[bj(0x21c)][bj(0x1a2)](bj(0x1cc)) && m['push'](n);
    }
    async [b4(0x257)]() {
        var bk = b4;
        let e = [],
            f = await navigator['mediaDevices'][bk(0x2e9)]();
        return f[bk(0x2d8)](g => {
            var bl = bk;
            g[bl(0x2bc)] === bl(0x2ce) && !g[bl(0x21c)]['includes'](bl(0x1cc)) && ('GgmAN' === 'QGTiV' ? m[bl(0x1d8)](n, o[p], q[(r + 0x1) % s[bl(0x2a9)]], t, 0x2) : e[bl(0x296)](g));
        }), e;
    }
    async [b4(0x1df)](e) {
        var bm = b4,
            f = document['createElement'](bm(0x22d));
        f['id'] = bm(0x244);
        var g = document['getElementById'](bm(0x2db));
        g[bm(0x19c)](f, g[bm(0x211)]);
        var h = 0x0;
        e = e['reverse'](), e[bm(0x2d8)](i => {
            var bn = bm;
            const j = document[bn(0x291)]('option');
            j[bn(0x28f)] = i[bn(0x2a2)];
            let k = 'Camera\x20' + h;
            i['label'] && (bn(0x1ca) === 'yVqQU' ? g[bn(0x296)](h) : k = i[bn(0x21c)]);
            const l = document[bn(0x22b)](k);
            j[bn(0x21e)](l), f['appendChild'](j);;
            h++;
        });
    }
    async [b4(0x200)]() {
        var bo = b4;;
        this['WEBCAM_SETTINGS'] = {
            'video': {
                'facingMode': bo(0x1db)
            },
            'audio': ![]
        };
        let e = await this[bo(0x257)]();
        iTracker[bo(0x1df)](e), iTracker[bo(0x249)] = !![];;
    }
    async [b4(0x21d)]() {
        var bp = b4;
        if (this[bp(0x249)]) {
            var e = document[bp(0x192)](bp(0x244))['value'];
            iTracker['WEBCAM_SETTINGS'][bp(0x2bd)][bp(0x2a2)] = e;;
            var f = document[bp(0x192)](bp(0x244));
            iTracker[bp(0x196)] = f[f[bp(0x25e)]][bp(0x2b6)];
        }
        var g = await navigator[bp(0x1d3)][bp(0x2c5)](iTracker[bp(0x2af)]);
        try {
            if (bp(0x255) === bp(0x20e)) {
                var i = s[bp(0x25b)](0x1 + t[bp(0x1fd)][0x0] - u['data32F'][0x4] - v[bp(0x1fd)][0x8]) * 0x2;
                w = (x[bp(0x1fd)][0x5] - y[bp(0x1fd)][0x7]) / i, z = 0.25 * i, A = (B[bp(0x1fd)][0x3] + C[bp(0x1fd)][0x1]) / i, D = (E['data32F'][0x6] + F[bp(0x1fd)][0x2]) / i;
            } else {
                const i = document[bp(0x291)](bp(0x2bd));
                i[bp(0x2b9)](bp(0x1f5), ''), i[bp(0x2b9)](bp(0x1e5), ''), i[bp(0x2b9)]('playsinline', ''), i[bp(0x1d5)] = g, iTracker[bp(0x26b)] = i, i[bp(0x1b3)] = async function (j) {
                    var bq = bp;
                    if (bq(0x198) === 'HlSZq') {
                        await i['play']();
                        try {
                            if ('jteJc' === bq(0x266)) {
                                const k = document[bq(0x291)](bq(0x2a1));
                                document[bq(0x29a)]('#unity-container')['appendChild'](k), k['id'] = bq(0x20a);;
                                iTracker['resize']();
                                const l = k['getContext']('2d');
                                iTracker[bq(0x2c3)] = Date[bq(0x253)](), iTracker[bq(0x277)] = Date['now'](), iTracker[bq(0x1cd)] = Date[bq(0x253)](), iTracker.#p054 = 0x0, iTracker.#p037 = setInterval(iTracker.#f002, 0x1 / iTracker['FRAMERATE'] * 0x3e8, i, k, l), iTracker[bq(0x1e7)] = k, iTracker[bq(0x1fb)] = l;
                            } else {
                                var n = V[bq(0x29e)],
                                    o = n['pt']['x'],
                                    p = n['pt']['y'],
                                    q = W['patch'],
                                    r = X[bq(0x2a5)](Y / 0x2),
                                    s = new Z[(bq(0x2da))](o - r, p - r, a0, a1),
                                    t = new a2['Rect'](o - a3 / 0x2, p - a4 / 0x2, a5, a6);
                                a7 && (aC[bq(0x1c3)](aD, new aE['Point'](s['x'], s['y']), new aF[(bq(0x1fa))](s['x'] + s['width'], s['y'] + s[bq(0x273)]), new aG[(bq(0x19b))](0xff, 0x0, 0x0), 0x1), aH[bq(0x1c3)](aI, new aJ['Point'](t['x'], t['y']), new aK['Point'](t['x'] + t[bq(0x1a3)], t['y'] + t[bq(0x273)]), new aL[(bq(0x19b))](0x0, 0x0, 0xff), 0x1));
                                var u = ai[bq(0x1d9)](t),
                                    v = new aj[(bq(0x1f7))]();
                                ak[bq(0x2ea)](u, q, v, al[bq(0x1dc)]);
                                var w = am['minMaxLoc'](v);
                                u[bq(0x29f)](), v['delete']();
                                var x = new an[(bq(0x1fa))](o - ao / 0x2 + w['maxLoc']['x'], p - ap / 0x2 + w['maxLoc']['y']),
                                    y = new aq[(bq(0x1fa))](x['x'] + ar, x['y'] + as);
                                n['pt']['x'] = x['x'] + at['ceil'](au / 0x2), n['pt']['y'] = x['y'] + av[bq(0x2d1)](aw / 0x2), ax[bq(0x2a7)](n), ay && aM[bq(0x1c3)](aN, x, y, new aO[(bq(0x19b))](0xff, 0xff, 0x0), 0x1);
                            }
                        } catch (n) {
                            if ('bHQgj' !== 'lORVi');
                            else {
                                var p = s[bq(0x1a7)]()[bq(0x1a3)],
                                    q = t[bq(0x1a7)]()[bq(0x273)],
                                    r = u['kp'][bq(0x2bb)](v)['pt']['x'] / p,
                                    s = p['kp'][bq(0x2bb)](r)['pt']['y'] / q;
                                if (r < s) z = r;
                                else {
                                    if (r > A) B = r;
                                }
                                if (s < C) D = s;
                                else {
                                    if (s > E) F = s;
                                }
                            }
                        }
                    } else {
                        var q = new l[(bq(0x1f7))]();
                        m['GaussianBlur'](n, q, new o[(bq(0x28a))](0x0, 0x0), 0x3), p[bq(0x2cd)](q, 0x4, q, -0x3, 0x0, q);
                        if (r);
                        return q;
                    }
                };
            }
        } catch (j) {
            ;
        }
    } ['resizeWithDelay'](e) {
        var br = b4;
        if (e['target'] != window) return;
        iTracker[br(0x267)]();
        iTracker.#p046 && (br(0x2e0) === br(0x1c4) ? (g['error'](br(0x235)), h[br(0x2d2)] = !![]) : (iTracker.#p046[br(0x29f)](), iTracker.#p046 = null));
        iTracker[br(0x26a)]();
        var f = document['getElementById']('unity-container');
        setTimeout(() => {
            var bs = br;
            f['style'][bs(0x24e)] = bs(0x1ac);
        }, 0x0), setTimeout(() => {
            var bt = br;
            f[bt(0x1c2)][bt(0x24e)] = '';
        }, 0x32), setTimeout(() => {
            var bu = br,
                h = '';
            iTracker[bu(0x262)] && iTracker[bu(0x262)]['forEach'](i => {
                var bv = bu;
                if ('OaPxj' === 'GKHIu') {
                    var k = l['innerWidth'];
                    m['style'][bv(0x1a3)] = k + 'px', n['style'][bv(0x273)] = k * o + 'px', p[bv(0x1c2)][bv(0x19d)] = bv(0x2d5), q[bv(0x1c2)][bv(0x1d4)] = bv(0x248), r[bv(0x1c2)][bv(0x2b0)] = 'translate(-50%,-50%)';
                } else h += i + ',';
            }), iTracker[bu(0x19a)](h, iTracker[bu(0x1ff)]);
        }, 0x64);
    } [b4(0x26a)]() {
        var bw = b4;
        if (!window[bw(0x242)]) window['iTracker'] = this;
        var e = document['getElementById']('videoBackground'),
            f = iTracker[bw(0x26b)];
        if (!e || !f) return;
        e['width'] = f['videoWidth'], e[bw(0x273)] = f[bw(0x1ea)], iTracker['ASPECT_RATIO'] = f['videoWidth'] / f[bw(0x1ea)];
        if (iTracker[bw(0x229)] > 0x1) {
            iTracker['CANVAS_WIDTH'] = iTracker[bw(0x225)], iTracker['CANVAS_HEIGHT'] = Math[bw(0x2a5)](iTracker['CANVAS_WIDTH'] / iTracker['ASPECT_RATIO']);;
        } else {
            iTracker['CANVAS_HEIGHT'] = iTracker[bw(0x225)], iTracker['CANVAS_WIDTH'] = Math[bw(0x2a5)](iTracker['CANVAS_HEIGHT'] * iTracker['ASPECT_RATIO']);;
        };;;;
        let g = iTracker[bw(0x256)],
            i = iTracker[bw(0x250)];
        iTracker.#p044 = cv['matFromArray'](0x3, 0x3, cv[bw(0x29c)], [g, 0x0, g * 0.5, 0x0, g, i * 0.5, 0x0, 0x0, 0x1]), iTracker.#p045 = cv[bw(0x1c1)](0x5, 0x1, cv[bw(0x29c)], [0x0, 0x0, 0x0, 0x0, 0x0]);;
        var j = 0x1,
            k = window[bw(0x268)] / window[bw(0x20c)],
            l = e[bw(0x1a3)] / e[bw(0x273)];
        if (l > k) {
            var m = window[bw(0x20c)];
            e['style'][bw(0x273)] = m + 'px', e['style']['width'] = m * l + 'px', e[bw(0x1c2)][bw(0x19d)] = bw(0x248), e[bw(0x1c2)][bw(0x1d4)] = bw(0x219), e['style'][bw(0x2b0)] = bw(0x27f);
        } else {
            var n = window[bw(0x268)];
            e['style'][bw(0x1a3)] = n + 'px', e[bw(0x1c2)][bw(0x273)] = n * l + 'px', e['style'][bw(0x19d)] = bw(0x2d5), e[bw(0x1c2)][bw(0x1d4)] = bw(0x248), e['style'][bw(0x2b0)] = bw(0x1d7);
        }
        e[bw(0x1c2)][bw(0x210)] = 'absolute', e['style'][bw(0x269)] = bw(0x1f8);;
        iTracker.#f040();
    }#
    f002(e, f, g) {
        var bx = b4;
        if (iTracker['cameraPaused']) {
            ;
            return;
        }
        g[bx(0x280)](0x0, 0x0, f[bx(0x1a3)], f[bx(0x273)]), g[bx(0x193)](e, 0x0, 0x0), g[bx(0x1e4)](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
        if (!iTracker[bx(0x28b)]) {
            ;
            return;
        }
        var h = cv['imread'](bx(0x20a));
        cv[bx(0x26a)](h, h, {
            'width': iTracker[bx(0x256)],
            'height': iTracker[bx(0x250)]
        }, 0x0, 0x0, cv[bx(0x246)]);
        var i = iTracker.#f008(h),
            j = 0x18c5729d6e8;
        if (Date[bx(0x253)]() > j) {
            var k = new cv[(bx(0x1f7))](h[bx(0x2c9)], h[bx(0x299)], cv['CV_8UC4'], new cv[(bx(0x19b))](0x1, 0x1, 0x1, 6.67));
            h = h[bx(0x2b7)](k, 0.15), k['delete'](), cv[bx(0x26a)](h, h, {
                'width': iTracker[bx(0x26b)][bx(0x2a0)],
                'height': iTracker[bx(0x26b)][bx(0x1ea)]
            }, 0x0, 0x0, cv[bx(0x246)]), cv[bx(0x23d)]('videoBackground', h);
        }
        if (iTracker.#p056[bx(0x1ed)]('true') != 0x1 + '.' + 0x4 + '.' + 0x2 + '.' + 0x23097) {
            if ('YBhkd' === 'mfxaz') t['push'](u[bx(0x1fd)][v]), w[bx(0x296)](x['data32F'][y + 0x1]), z && I[bx(0x276)](J, new K[(bx(0x1fa))](L[bx(0x1fd)][M], N['data32F'][O + 0x1]), 0x3, new P[(bx(0x19b))](0xff, 0x0, 0x0), 0x3);
            else {
                !iTracker[bx(0x2d2)] && (console[bx(0x23e)](bx(0x235)), iTracker[bx(0x2d2)] = !![]);
                return;
            }
        }
        var l = iTracker.#p055[bx(0x1ed)](bx(0x254)),
            m = Object[bx(0x238)](l[bx(0x2dc)]),
            n = [];
        iTracker['targetsInScene'][bx(0x2d8)](u => {
            var by = bx,
                v = m[by(0x21a)](u);
            if (v > -0x1) {
                if (by(0x2e5) === by(0x2e5)) n[by(0x296)](u);
                else {
                    var x = {};
                    return function () {
                        var bz = by;
                        if (arguments['length'] == 0x1) return x[arguments[0x0]];
                        arguments[bz(0x2a9)] == 0x2 && (x[arguments[0x0]] = arguments[0x1]);
                    };
                }
            }
        });
        var o = Object['keys'](l[bx(0x195)]);
        if (Date[bx(0x253)]() - iTracker[bx(0x277)] > iTracker[bx(0x1fc)] && n['length'] > 0x0 && o[bx(0x2a9)] < iTracker[bx(0x1ee)]) {
            if ('dgzJL' !== bx(0x252)) g[bx(0x2a7)](h);
            else {
                var p = iTracker.#f009(i);
                iTracker[bx(0x277)] = Date[bx(0x253)]();
                var q = iTracker.#f003(p);
                if (q) var r = iTracker.#f004(i, q['id'], q[bx(0x1d9)]);
                p[bx(0x29f)]();
            }
        }
        iTracker.#f005(i);
        if (iTracker.#p046) iTracker.#p046[bx(0x29f)]();
        iTracker.#p046 = i;
        iTracker.#p047 && iTracker.#p047[bx(0x29f)]();
        iTracker.#p047 = h;
        var s = (Date[bx(0x253)]() - iTracker[bx(0x2c3)]) / 0x3e8;
        iTracker[bx(0x2c3)] = Date['now']();
    }#
    f003(e) {
        var bA = b4,
            f = this.#p055[bA(0x1ed)](bA(0x254)),
            g = Object['keys'](f[bA(0x2dc)]),
            h = [];
        this['targetsInScene'][bA(0x2d8)](x => {
            var bB = bA,
                y = g[bB(0x21a)](x);
            y > -0x1 && h[bB(0x296)](x);
        });
        var i = Object[bA(0x238)](f[bA(0x195)]);
        if (h[bA(0x2a9)] > 0x0 && i[bA(0x2a9)] < this['MAX_SIMULTANEOUS_TRACK']) {
            var j = this.#p001,
                k = this.#p002,
                l = new cv[(bA(0x2da))]((this['CANVAS_WIDTH'] - j) / 0x2, (this['CANVAS_HEIGHT'] - j) / 0x2, j, j),
                m = e['roi'](l);
            cv[bA(0x26a)](m, m, {
                'width': j * k,
                'height': j * k
            }, 0x0, 0x0, cv[bA(0x246)]);
            var n = this.#f010(m, this.#p048, this.#p050);
            this.#p054++, this.#p054 %= h[bA(0x2a9)];
            var o = h[this.#p054],
                f = this.#p055[bA(0x1ed)](bA(0x254)),
                p = f[bA(0x2dc)][o],
                q = this.#f011(n[bA(0x2d9)], p[bA(0x227)], this.#p052, this.#p003),
                r = q[bA(0x224)];
            n['kp'] = this.#f017(n['kp'], l, k);
            if (r[bA(0x1a7)]() > this.#p004) {
                if (bA(0x264) !== bA(0x2b5)) {
                    var s = this.#f014(n['kp'], p[bA(0x217)], r, this.#p004);
                    if (s) {
                        var t = s['h'],
                            u = s[bA(0x261)],
                            v = this.#f015(p['gray'][bA(0x299)] - 0x1, p[bA(0x1b6)][bA(0x2c9)] - 0x1, t);
                        t['delete'](), u[bA(0x29f)]();
                        var w = this.#f016(v);
                        return v[bA(0x29f)](), {
                            'id': o,
                            'roi': w
                        };
                    }
                } else {
                    let y = K[bA(0x287)](L[bA(0x1f2)](M[bA(0x1fd)][0x0], N['data32F'][0x2], O[bA(0x1fd)][0x4], P[bA(0x1fd)][0x6])),
                        z = Q['round'](R[bA(0x1a9)](S['data32F'][0x0], T['data32F'][0x2], U[bA(0x1fd)][0x4], V['data32F'][0x6])),
                        A = W[bA(0x287)](X['min'](Y['data32F'][0x1], Z['data32F'][0x3], a0[bA(0x1fd)][0x5], a1['data32F'][0x7])),
                        B = a2[bA(0x287)](a3[bA(0x1a9)](a4[bA(0x1fd)][0x1], a5[bA(0x1fd)][0x3], a6[bA(0x1fd)][0x5], a7[bA(0x1fd)][0x7]));
                    y = y < 0x0 ? 0x0 : y, A = A < 0x0 ? 0x0 : A, z = z > this[bA(0x256)] ? this['CANVAS_WIDTH'] : z, B = B > this[bA(0x250)] ? this[bA(0x250)] : B;
                    var C = new a8[(bA(0x2da))](y, A, z - y, B - A);
                    if (D) {
                        var D = new ag[(bA(0x1f7))][(bA(0x1ba))](this[bA(0x250)], this[bA(0x256)], ah['CV_8UC1']);
                        let E = new ai([y, A, z, A, z, B, y, B]),
                            F = aj[bA(0x1c1)](0x4, 0x1, ak[bA(0x1b1)], E);
                        al[bA(0x29d)](D, F, new am[(bA(0x19b))](0xff)), F[bA(0x29f)]();;
                        D[bA(0x29f)]();
                    }
                    return C;
                }
            }
            n['kp'][bA(0x29f)](), n[bA(0x2d9)][bA(0x29f)](), r[bA(0x29f)](), m[bA(0x29f)]();
        }
        return;
    }#
    f004(e, f, g) {
        var bC = b4,
            h = e['roi'](g),
            i = g[bC(0x1a3)] * g[bC(0x273)];
        if (i > iTracker[bC(0x275)]) var j = Math[bC(0x25b)](iTracker[bC(0x275)] / i);
        else var j = 0x1;
        cv['resize'](h, h, {
            'width': g[bC(0x1a3)] * j,
            'height': g[bC(0x273)] * j
        }, 0x0, 0x0, cv[bC(0x246)]);
        var k = this.#f010(h, this.#p048, this.#p050);
        k['kp'] = this.#f017(k['kp'], g, j);
        var l = this.#p055[bC(0x1ed)](bC(0x254)),
            m = l['untracked'][f],
            n = this.#f011(k[bC(0x2d9)], m[bC(0x2d9)], this.#p052, this.#p005),
            o = n[bC(0x224)];
        if (o[bC(0x1a7)]() > this.#p006) {
            if (bC(0x1bc) !== bC(0x1bc));
            else {
                var p = this.#f014(k['kp'], m['kp'], o, this.#p004);
                if (p) {
                    var q = p['h'],
                        r = p[bC(0x261)],
                        s = this.#f015(m['gray'][bC(0x299)] - 0x1, m[bC(0x1b6)]['rows'] - 0x1, q);
                    m[bC(0x224)] = r, m[bC(0x208)] = q, l['tracked'][f] = {}, Object[bC(0x214)](l['tracked'][f], m), delete l[bC(0x2dc)][f], s[bC(0x29f)]();;
                    this.#f037(f), this[bC(0x29b)]++;
                    if (this['trackedCount'] == 0x2) {}
                    return m;
                }
            }
        } else {
            if (m[bC(0x1d9)]) delete m[bC(0x1d9)];
        }
        k['kp']['delete'](), k[bC(0x2d9)][bC(0x29f)](), o[bC(0x29f)](), h['delete']();
        return;
    }#
    f005(e) {
        var bD = b4,
            f = this.#p055[bD(0x1ed)]('true'),
            g = Object[bD(0x238)](f[bD(0x195)]),
            h = Object[bD(0x238)](f[bD(0x195)]);
        g[bD(0x2a9)] > 0x0 && (g['forEach'](i => {
            var bE = bD,
                j = ![],
                k = f[bE(0x195)][i];
            if (iTracker.#p014 && k['matches'][bE(0x1a7)]() < k['kp']['size']()) {
                ;
                iTracker.#f036(e, k);
            }
            var l = 0x1;
            if (k[bE(0x1b2)]) {
                var m = k[bE(0x1b2)][bE(0x247)][bE(0x1fd)][0x2],
                    n = 0.1,
                    o = 0x3,
                    p = 0.75,
                    q = 0x3;
                l = q - (m - n) / (o - n) * (q - p), l = Math[bE(0x1f2)](Math[bE(0x1a9)](l, p), q);
            }
            var r = iTracker.#f018(k['gray'], k[bE(0x208)]),
                s = iTracker.#f019(i, k['kp'], k['matches'], k[bE(0x208)], l),
                t = s['kp'],
                u = s[bE(0x224)];
            !iTracker.#p046 && (bE(0x1e9) === bE(0x237) ? (i['log'](bE(0x2aa) + j), k[bE(0x2a8)][bE(0x2c4)](this[bE(0x1ff)], bE(0x272), l)) : (iTracker.#p046 = new cv[(bE(0x1f7))](), e[bE(0x2a3)](iTracker.#p046)));
            const {
                newKeypoints: v,
                errors: w
            } = iTracker.#f023(e, iTracker.#p046, s['kp']);
            if (w[bE(0x2a9)] <= 0x0 && Math[bE(0x24f)](l - iTracker['lastMatchTrackDist']) < 0.25 && k[bE(0x2e4)] && Date[bE(0x253)]() - iTracker['lastMatchTrackTime'] < 0x5dc) var x = v;
            else {
                var y = iTracker.#f020(i, r, t, l),
                    x = iTracker.#f022(i, e, y, l);
                iTracker.#f021(y), iTracker[bE(0x1cd)] = Date[bE(0x253)](), iTracker['lastMatchTrackDist'] = l;
            }
            r[bE(0x29f)]();
            var A = this.#f014(x, k['kp'], u, this.#p008);
            if (A) {
                var B = A['h'],
                    C = A[bE(0x261)];
                k[bE(0x224)][bE(0x29f)](), k[bE(0x224)] = C;
                var D = this.#f015(k[bE(0x1b6)][bE(0x299)] - 0x1, k[bE(0x1b6)][bE(0x2c9)] - 0x1, B),
                    E = this.#f016(D),
                    F = iTracker.#f024(k[bE(0x1b6)]['cols'], k[bE(0x1b6)][bE(0x2c9)], D, k['lastPose']),
                    G = this.#f025(F, i, l);
                if (G['valid']) {
                    j = !![], k['homography'][bE(0x29f)](), k[bE(0x208)] = B, k[bE(0x1d9)] = E;
                    if (iTracker.#p022) {
                        if ('hOOBU' === 'GqiQo') {
                            o[bE(0x1bd)][bE(0x1c2)][bE(0x273)] = p[bE(0x20c)] + 'px';
                            var M = q[bE(0x192)](bE(0x221))['getBoundingClientRect']()['height'];
                            r *= s[bE(0x20c)] / M;;
                            t[bE(0x1c2)][bE(0x273)] = u[bE(0x20c)] + 'px', v[bE(0x1c2)][bE(0x1a3)] = w[bE(0x20c)] * x + 'px';
                        } else {
                            if (k['kalman'][bE(0x1d1)]) {
                                if ('UbPdm' !== bE(0x2b2)) {
                                    var N = {
                                        'distance': 0x64,
                                        'imgIdx': 0x0,
                                        'queryIdx': 0x0,
                                        'trainIdx': i[bE(0x20d)][j]
                                    };
                                    k[bE(0x224)][bE(0x2a7)](N), l++;
                                } else var H = (Date[bE(0x253)]() - iTracker[bE(0x2c3)]) / 0x3e8,
                                    I = iTracker.#f029(i, H);
                            }
                            iTracker.#f030(i, F);
                            var J = this.#f026(F, I);
                            this.#f039(i, J);
                            if (I && J == F) {
                                if (bE(0x1e1) === bE(0x1a0)) {
                                    var O = this[bE(0x20b)] - m,
                                        P = this['lasti'] - n,
                                        Q = this[bE(0x283)] - o,
                                        R = this[bE(0x24a)] - p;
                                    (O * O > 0x1 || P * P > 0x1 || Q * Q > 0x1 || R * R > 0x1) && (u *= -0x1, v *= -0x1, w *= -0x1, x *= -0x1);
                                } else iTracker.#f028(i);
                            }
                        }
                    } else this.#f039(i, F);
                }
                D['delete']();
            }
            t[bE(0x29f)](), u[bE(0x29f)]();
            if (!j) {
                if (iTracker.#p022) iTracker.#f028(i);
                this.#f006(i);
            }
        }), iTracker.#f045(bD(0x25a)));
    }#
    f006(e) {
        var bF = b4,
            f = this.#p055['constructor'](bF(0x254)),
            g = f[bF(0x195)][e];
        delete g[bF(0x224)], g[bF(0x208)][bF(0x29f)](), delete g[bF(0x208)], delete g[bF(0x1b2)], f[bF(0x2dc)][e] = {}, Object[bF(0x214)](f[bF(0x2dc)][e], g), delete f[bF(0x195)][e], this[bF(0x29b)]--;
        if (this['trackedCount'] == 0x1) {};
        this.#f038(e);
    }#
    f007(e) {
        var bG = b4,
            f = {
                'untracked': {},
                'tracked': {}
            },
            g = [],
            h = document['querySelectorAll']('imagetarget'),
            i = document[bG(0x291)](bG(0x2a1)),
            j = i['getContext']('2d'),
            k = 0x0;
        h['forEach'](m => {
            var bH = bG,
                n = m[bH(0x2ca)]('id'),
                o = m[bH(0x2ca)](bH(0x1c5)),
                p = new Image();
            p['crossOrigin'] = bH(0x1aa), p[bH(0x28c)] = function () {
                var bI = bH;;
                g[bI(0x296)](n);
                var q = p[bI(0x1a3)] * p[bI(0x273)];
                if (q > iTracker[bI(0x2e6)]) var r = Math[bI(0x25b)](iTracker['MAX_TARGET_AREA'] / q);
                else var r = 0x1;
                i[bI(0x1a3)] = p['width'] * r, i['height'] = p[bI(0x273)] * r, j[bI(0x193)](p, 0x0, 0x0, p[bI(0x1a3)] * r, p[bI(0x273)] * r);
                var s = new cv[(bI(0x1f7))](i['height'], i[bI(0x1a3)], cv[bI(0x26e)]);
                s['data'][bI(0x234)](j[bI(0x1ae)](0x0, 0x0, i[bI(0x1a3)], i[bI(0x273)])[bI(0x26f)]);
                var t = iTracker.#f008(s),
                    u = iTracker.#f010(t, iTracker.#p048, iTracker.#p050),
                    v = iTracker.#f009(t),
                    z = iTracker.#f010(v, iTracker.#p048, iTracker.#p050),
                    A = {};
                A[bI(0x2d9)] = u['des'], A['kp'] = u['kp'], A[bI(0x1b6)] = t, A['desSharp'] = z['des'], A[bI(0x217)] = z['kp'], A[bI(0x1eb)] = v;
                var B = 0x1,
                    C = 0x0,
                    D = 0x1,
                    E = 0x0;
                for (var F = 0x0; F < u['kp'][bI(0x1a7)](); F++) {
                    var G = t[bI(0x1a7)]()[bI(0x1a3)],
                        H = t[bI(0x1a7)]()[bI(0x273)],
                        I = u['kp']['get'](F)['pt']['x'] / G,
                        J = u['kp'][bI(0x2bb)](F)['pt']['y'] / H;
                    if (I < B) B = I;
                    else {
                        if (I > C) C = I;
                    }
                    if (J < D) D = J;
                    else {
                        if (J > E) E = J;
                    }
                }
                A[bI(0x2b8)] = (C - B) * (E - D), A[bI(0x28e)] = Date[bI(0x253)](), A['lastPoseIsStable'] = ![], f[bI(0x2dc)][n] = A;
                if (iTracker.#p022) iTracker.#f027(n);
                k++, k == h[bI(0x2a9)] && ('xvgVn' !== bI(0x2c6) ? e() : m[bI(0x276)](n, new o[(bI(0x1fa))](p[bI(0x1fd)][q], r[bI(0x1fd)][s + 0x1]), 0x3, new t[(bI(0x19b))](0xff, 0x0, 0x0), 0x3));
            }, p[bH(0x1c5)] = o;
        });
        var l = () => {
            var bJ = bG;
            if (bJ(0x27a) === bJ(0x25f)) {
                var o = 0x1,
                    p = p[bJ(0x192)](q);
                if (!p) {
                    p = A[bJ(0x291)](bJ(0x2a1)), p['id'] = B, C[bJ(0x1bd)][bJ(0x21e)](p);
                    if (!this[bJ(0x226)]) this[bJ(0x226)] = [];
                    this[bJ(0x226)][bJ(0x296)](D), p['style'][bJ(0x210)] = 'absolute', p[bJ(0x1c2)]['top'] = 0x0, p[bJ(0x1c2)][bJ(0x19d)] = 0x0, p[bJ(0x1c2)][bJ(0x2b0)] = bJ(0x2e7) + o + ')';
                }
                v[bJ(0x23d)](w, x);
                var q = this[bJ(0x226)][bJ(0x21a)](y);
                q != -0x1 && (p[bJ(0x1c2)][bJ(0x19d)] = q * E[bJ(0x1a7)]()[bJ(0x1a3)] * o + 'px');
            } else {
                var m = {};
                return function () {
                    var bK = bJ;
                    if (arguments[bK(0x2a9)] == 0x1) return m[arguments[0x0]];
                    arguments['length'] == 0x2 && (m[arguments[0x0]] = arguments[0x1]);
                };
            }
        };
        this.#p055 = new(l())(), this.#p055['ids'] = g, this.#p055[bG(0x1ed)](bG(0x254), f);
    }#
    f008(e, f = ![]) {
        var bL = b4,
            g = new cv[(bL(0x1f7))]();
        cv[bL(0x2c0)](e, g, cv[bL(0x2dd)], 0x0);
        if (f);
        return g;
    }#
    f009(e, f = ![]) {
        var bM = b4,
            g = new cv[(bM(0x1f7))]();
        cv['GaussianBlur'](e, g, new cv[(bM(0x28a))](0x0, 0x0), 0x3), cv[bM(0x2cd)](e, 0x4, g, -0x3, 0x0, g);
        if (f);
        return g;
    }#
    f010(e, f, g, h) {
        var bN = b4;
        let i = new cv[(bN(0x292))](),
            j = new cv[(bN(0x1f7))]();
        f[bN(0x209)](e, i, new cv[(bN(0x1f7))]()), g[bN(0x1a6)](e, i, j);
        if (h) {
            if (bN(0x23c) === bN(0x22c)) {
                var n = h[bN(0x192)](i);
                if (n) {
                    n['remove']();
                    var o = this['debugIds'][bN(0x21a)](k);
                    o !== -0x1 && this[bN(0x226)][bN(0x289)](o, 0x1);
                }
            } else this.#f013(e, i, bN(0x2be)), h['delete']();
        }
        return {
            'kp': i,
            'des': j
        };
    }#
    f011(e, f, g, h, j = ![], k, l, m, n) {
        var bO = b4;
        let o = new cv[(bO(0x1b0))](),
            p = new cv[(bO(0x1d0))]();
        g[bO(0x2df)](e, f, p, 0x2);
        for (let q = 0x0; q < p[bO(0x1a7)](); ++q) {
            let r = p[bO(0x2bb)](q),
                s = r[bO(0x2bb)](0x0),
                t = r[bO(0x2bb)](0x1);
            if (!s || !t) {
                if (bO(0x218) !== bO(0x1ce)) {
                    ;
                    continue;
                } else v[bO(0x270)][bO(0x21f)][bO(0x29f)](), w[bO(0x270)][bO(0x21f)] = x['matFromArray'](0x15, 0x1, y[bO(0x29c)], [z[bO(0x1fd)][0x0], A['data32F'][0x1], B['data32F'][0x2], 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, C, D, E, F, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]), G[bO(0x270)]['kf']['statePre']['delete'](), H[bO(0x270)][bO(0x21f)][bO(0x2a3)](I[bO(0x270)]['kf'][bO(0x1bb)]), J[bO(0x270)]['kf'][bO(0x2ee)][bO(0x29f)](), K['kalman'][bO(0x21f)][bO(0x2a3)](L[bO(0x270)]['kf'][bO(0x2ee)]);
            }
            s['distance'] < t['distance'] * h && o['push_back'](s);
        }
        return j && this.#f012(o, k, l, m, n), {
            'matches': o
        };
    }#
    f012(e, f, g, h, i, j = b4(0x282)) {
        var bP = b4,
            k = new cv['Mat']();
        let l = new cv[(bP(0x19b))](0x0, 0xff, 0x0, 0xff);
        cv['drawMatches'](f, h, g, i, e, k, l), k[bP(0x29f)]();
    }#
    f013(e, f, g = b4(0x2ed)) {
        var bQ = b4,
            h = new cv[(bQ(0x1f7))](),
            i = new cv[(bQ(0x19b))](0x0, 0xff, 0x0);
        cv[bQ(0x260)](e, f, h, i), this.#f041(h, g), h['delete']();
    }#
    f014(e, f, g, j, k = ![], l, m) {
        var bR = b4;
        let n = [],
            o = [],
            p = e,
            q = f;
        for (let u = 0x0; u < g[bR(0x1a7)](); u++) {
            n[bR(0x296)](p[bR(0x2bb)](g[bR(0x2bb)](u)[bR(0x223)])['pt']['x']), n[bR(0x296)](p[bR(0x2bb)](g[bR(0x2bb)](u)['queryIdx'])['pt']['y']), o[bR(0x296)](q['get'](g['get'](u)[bR(0x25c)])['pt']['x']), o[bR(0x296)](q[bR(0x2bb)](g[bR(0x2bb)](u)[bR(0x25c)])['pt']['y']);
        }
        if (n[bR(0x2a9)] / 0x2 >= j) {
            let v = cv[bR(0x1c1)](n[bR(0x2a9)] / 0x2, 0x2, cv['CV_32F'], n),
                w = cv[bR(0x1c1)](o['length'] / 0x2, 0x2, cv[bR(0x29c)], o),
                x = new cv[(bR(0x1f7))](),
                y = new cv['DMatchVector'](),
                z = cv[bR(0x216)](v, w, cv[bR(0x1e3)], this.#p009, x, 0x7d0, 0.999);
            v['delete'](), w['delete']();
            if (z[bR(0x1bf)]()) {
                if (bR(0x298) === 'ZTWNw') this[bR(0x226)][bR(0x289)](f, 0x1);
                else return;
            }
            var r = 0x0;
            for (var s = 0x0; s < g['size'](); s++) {
                if (x['data'][s]) {
                    if (y[bR(0x1a7)]() > this[bR(0x1ad)]) {
                        if (this[bR(0x1b8)](0x0, 0x1) > 0x0) {
                            var t = this['randomIntFromInterval'](0x0, this[bR(0x1ad)] - 0x1);
                            y['set'](t, g['get'](s));
                        }
                    } else 'dBUqG' !== bR(0x1f1) ? l[bR(0x1cb)](C => {
                        var bS = bR;;
                        s['cv'] = C, t[bS(0x242)] = new u(), v[bS(0x297)]('resize', w[bS(0x242)][bS(0x1de)], !![]), x[bS(0x192)]('startCameraBtn')[bS(0x1c2)][bS(0x24e)] = bS(0x1e2);
                    }) : y[bR(0x2a7)](g[bR(0x2bb)](s));
                }
                r++;
            }
            x['delete']();
            if (k) {
                var k = new cv['Mat']();
                let C = new cv[(bR(0x19b))](0xff, 0xff, 0x0, 0xff);
                cv[bR(0x1c6)](l, e, m, f, y, k, C), k[bR(0x29f)]();
            }
            return {
                'h': z,
                'refinedMatches': y
            };
        }
        return;
    }#
    f015(e, f, g, j = ![], k) {
        var bT = b4,
            l = [0x0, 0x0, e, 0x0, e, f, 0x0, f],
            m = cv['matFromArray'](l[bT(0x2a9)] / 0x2, 0x1, cv['CV_32FC2'], l),
            n = new cv[(bT(0x1f7))]();
        cv[bT(0x2c7)](m, n, g[bT(0x202)](0x0));
        if (j) {
            if ('PtILe' !== bT(0x207)) {
                var t = '';
                r[bT(0x262)] && m[bT(0x262)][bT(0x2d8)](u => {
                    t += u + ',';
                }), k[bT(0x19a)](t, l[bT(0x1ff)]);
            } else {
                var o = new cv[(bT(0x1f7))]();
                cv['cvtColor'](k, o, cv[bT(0x285)], 0x0);
                var p = new cv['Scalar'](0xff, 0xff, 0x0),
                    q = [new cv[(bT(0x1fa))](n['data32F'][0x0], n[bT(0x1fd)][0x1]), new cv['Point'](n[bT(0x1fd)][0x2], n[bT(0x1fd)][0x3]), new cv[(bT(0x1fa))](n[bT(0x1fd)][0x4], n[bT(0x1fd)][0x5]), new cv['Point'](n[bT(0x1fd)][0x6], n[bT(0x1fd)][0x7])];
                for (var r = 0x0; r < q[bT(0x2a9)]; r++) {
                    'RojJl' !== bT(0x1c8) ? cv[bT(0x1d8)](o, q[r], q[(r + 0x1) % q[bT(0x2a9)]], p, 0x2) : (this[bT(0x2e2)] = ![], this[bT(0x26b)][bT(0x19f)]());
                }
                iTracker.#f041(o, bT(0x2d7)), o[bT(0x29f)]();
            }
        }
        return m['delete'](), n;
    }#
    f016(e, f) {
        var bU = b4;
        let g = Math[bU(0x287)](Math['min'](e[bU(0x1fd)][0x0], e[bU(0x1fd)][0x2], e['data32F'][0x4], e['data32F'][0x6])),
            h = Math[bU(0x287)](Math[bU(0x1a9)](e['data32F'][0x0], e[bU(0x1fd)][0x2], e[bU(0x1fd)][0x4], e[bU(0x1fd)][0x6])),
            i = Math['round'](Math[bU(0x1f2)](e[bU(0x1fd)][0x1], e[bU(0x1fd)][0x3], e['data32F'][0x5], e[bU(0x1fd)][0x7])),
            j = Math[bU(0x287)](Math[bU(0x1a9)](e['data32F'][0x1], e[bU(0x1fd)][0x3], e[bU(0x1fd)][0x5], e['data32F'][0x7]));
        g = g < 0x0 ? 0x0 : g, i = i < 0x0 ? 0x0 : i, h = h > this[bU(0x256)] ? this[bU(0x256)] : h, j = j > this[bU(0x250)] ? this['CANVAS_HEIGHT'] : j;
        var k = new cv['Rect'](g, i, h - g, j - i);
        if (f) {
            var f = new cv[(bU(0x1f7))][(bU(0x1ba))](this['CANVAS_HEIGHT'], this[bU(0x256)], cv[bU(0x295)]);
            let l = new Uint32Array([g, i, h, i, h, j, g, j]),
                m = cv['matFromArray'](0x4, 0x1, cv['CV_32SC2'], l);
            cv['fillConvexPoly'](f, m, new cv[(bU(0x19b))](0xff)), m[bU(0x29f)]();;
            f[bU(0x29f)]();
        }
        return k;
    }#
    f017(e, f, g) {
        var bV = b4;
        for (var h = 0x0; h < e[bV(0x1a7)](); h++) {
            var j = e[bV(0x2bb)](h);
            j['pt']['x'] = j['pt']['x'] / g + f['x'], j['pt']['y'] = j['pt']['y'] / g + f['y'], e[bV(0x234)](h, j);
        }
        return e;
    }#
    f018(e, f, g) {
        var bW = b4;
        let h = new cv[(bW(0x1f7))](),
            i = {
                'width': this['CANVAS_WIDTH'],
                'height': this[bW(0x250)]
            };
        cv[bW(0x22a)](e, h, f, i, cv['WARP_INVERSE_MAP']);
        if (g);
        return h;
    }#
    f019(e, f, g, h, j, k, l, m) {
        var bX = b4,
            n = this.#p055[bX(0x1ed)](bX(0x254)),
            o = n['tracked'][e],
            q = (![] ? this.#p036 : this.#p032) * j,
            r = new cv[(bX(0x292))](),
            s = new cv[(bX(0x1b0))](),
            t = 0x0,
            u = [];
        for (var v = 0x0; v < g['size'](); v++) {
            if (bX(0x288) !== 'KfpXE') {
                ;
                return;
            } else {
                var w = g[bX(0x2bb)](v),
                    z = f[bX(0x2bb)](w['trainIdx'])['pt']['x'],
                    A = f[bX(0x2bb)](w[bX(0x25c)])['pt']['y'];
                u['push'](z), u[bX(0x296)](A);
            }
        }
        var B = cv[bX(0x1c1)](u[bX(0x2a9)] / 0x2, 0x1, cv[bX(0x1ec)], u),
            C = new cv[(bX(0x1f7))]();
        cv[bX(0x2c7)](B, C, h[bX(0x202)](0x0));
        for (var v = 0x0; v < C[bX(0x1fd)][bX(0x2a9)]; v += 0x2) {
            var w = g[bX(0x2bb)](v / 0x2),
                D = f[bX(0x2bb)](w['trainIdx']),
                z = C['data32F'][v],
                A = C[bX(0x1fd)][v + 0x1];
            if (z < q / 0x2 || z > this[bX(0x256)] - q / 0x2 || A < q / 0x2 || A > this[bX(0x250)] - q / 0x2) {
                if (bX(0x240) === 'oUyst') {
                    if (arguments[bX(0x2a9)] == 0x1) return v[arguments[0x0]];
                    arguments['length'] == 0x2 && (j[arguments[0x0]] = arguments[0x1]);
                } else {
                    t++;
                    continue;
                }
            }
            D['pt']['x'] = z, D['pt']['y'] = A, r[bX(0x2a7)](D), w[bX(0x223)] = v / 0x2 - t, s[bX(0x2a7)](w);
        }
        B['delete'](), C[bX(0x29f)]();
        if (k) {
            var k = new cv[(bX(0x1f7))](),
                E = new cv[(bX(0x19b))](0xff, 0x0, 0xff);
            cv[bX(0x1c6)](l, r, m, f, s, k, E), k[bX(0x29f)]();
        }
        return {
            'kp': r,
            'matches': s
        };
    }#
    f020(e, f, g, h, j) {
        var bY = b4;
        if (j) {
            var k = new cv[(bY(0x1f7))]();
            f[bY(0x2a3)](k), cv[bY(0x2c0)](k, k, cv[bY(0x285)], 0x0);
        }
        var l = this.#p055[bY(0x1ed)](bY(0x254)),
            m = l['tracked'][e],
            n = (![] ? this.#p035 : this.#p031) * h,
            o = (![] ? this.#p036 : this.#p032) * h,
            p = [],
            q = 0x0;
        for (var r = 0x0; r < g[bY(0x1a7)](); r++) {
            var s = g[bY(0x2bb)](r),
                t = s['pt']['x'],
                u = s['pt']['y'];
            if (t < o / 0x2 || t > f['size']()[bY(0x1a3)] - o / 0x2 || u < o / 0x2 || u > f['size']()['height'] - o / 0x2) {
                q++;
                continue;
            }
            var v = Math[bY(0x2a5)](n / 0x2),
                w = new cv['Mat'](),
                z = new cv[(bY(0x2da))](t - v, u - v, n, n);
            w = f['roi'](z), p[bY(0x296)]({
                'keypoint': s,
                'patch': w
            }), j && cv[bY(0x1c3)](k, new cv[(bY(0x1fa))](z['x'], z['y']), new cv[(bY(0x1fa))](z['x'] + z[bY(0x1a3)], z['y'] + z['height']), new cv[(bY(0x19b))](0x0, 0xff, 0xff), 0x1);
        }
        if (j) {
            ;
            k[bY(0x29f)]();
        }
        return p;
    }#
    f021(e) {
        var bZ = b4;
        e[bZ(0x2d8)](f => {
            var c0 = bZ;
            f[c0(0x203)][c0(0x29f)]();
        });
    }#
    f022(e, f, g, h, i) {
        var c1 = b4,
            j = this.#p055[c1(0x1ed)](c1(0x254)),
            k = j[c1(0x195)][e],
            l = (![] ? this.#p035 : this.#p031) * h,
            m = (![] ? this.#p036 : this.#p032) * h,
            n = new cv[(c1(0x292))]();
        if (i) {
            if ('SCdnq' === c1(0x230)) {
                var r = l[c1(0x291)]('select');
                r['id'] = c1(0x244);
                var v = m['getElementById'](c1(0x2db));
                v['insertBefore'](r, v[c1(0x211)]);
                var w = 0x0;
                n = o[c1(0x2e8)](), p[c1(0x2d8)](z => {
                    var c2 = c1;
                    const A = r[c2(0x291)]('option');
                    A[c2(0x28f)] = z[c2(0x2a2)];
                    let B = c2(0x1f3) + w;
                    z[c2(0x21c)] && (B = z['label']);
                    const C = v['createTextNode'](B);
                    A[c2(0x21e)](C), r[c2(0x21e)](A);;
                    w++;
                });
            } else {
                var o = c1(0x25a),
                    p = this.#f044(o);
                if (!p) {
                    var p = new cv[(c1(0x1f7))]();
                    cv[c1(0x2c0)](f, p, cv[c1(0x285)], 0x0);
                }
            }
        }
        g[c1(0x2d8)](r => {
            var c3 = c1,
                s = r[c3(0x29e)],
                t = s['pt']['x'],
                u = s['pt']['y'],
                v = r[c3(0x203)],
                w = Math['floor'](l / 0x2),
                z = new cv[(c3(0x2da))](t - w, u - w, l, l),
                A = new cv[(c3(0x2da))](t - m / 0x2, u - m / 0x2, m, m);
            i && (cv[c3(0x1c3)](p, new cv[(c3(0x1fa))](z['x'], z['y']), new cv[(c3(0x1fa))](z['x'] + z[c3(0x1a3)], z['y'] + z[c3(0x273)]), new cv[(c3(0x19b))](0xff, 0x0, 0x0), 0x1), cv[c3(0x1c3)](p, new cv[(c3(0x1fa))](A['x'], A['y']), new cv['Point'](A['x'] + A[c3(0x1a3)], A['y'] + A[c3(0x273)]), new cv[(c3(0x19b))](0x0, 0x0, 0xff), 0x1));
            var B = f['roi'](A),
                C = new cv[(c3(0x1f7))]();
            cv[c3(0x2ea)](B, v, C, cv[c3(0x1dc)]);
            var D = cv['minMaxLoc'](C);
            B[c3(0x29f)](), C[c3(0x29f)]();
            var E = new cv['Point'](t - m / 0x2 + D[c3(0x27c)]['x'], u - m / 0x2 + D[c3(0x27c)]['y']),
                F = new cv[(c3(0x1fa))](E['x'] + l, E['y'] + l);
            s['pt']['x'] = E['x'] + Math[c3(0x2d1)](l / 0x2), s['pt']['y'] = E['y'] + Math[c3(0x2d1)](l / 0x2), n[c3(0x2a7)](s), i && cv[c3(0x1c3)](p, E, F, new cv[(c3(0x19b))](0xff, 0xff, 0x0), 0x1);
        });
        if (i) {
            if (c1(0x19e) === 'rQNBS') {
                q = r[c1(0x291)]('canvas'), s['id'] = t, u['body'][c1(0x21e)](v);
                if (!this[c1(0x226)]) this[c1(0x226)] = [];
                this[c1(0x226)][c1(0x296)](w), x[c1(0x1c2)][c1(0x210)] = c1(0x23f), y[c1(0x1c2)][c1(0x1d4)] = 0x0, z['style'][c1(0x19d)] = 0x0, A[c1(0x1c2)][c1(0x2b0)] = 'translate(0%,0%)\x20scale(' + B + ')';
            } else this.#f041(p, o), this.#f043(p, o);
        }
        return n;
    }#
    f023(e, f, g, h = ![]) {
        var c4 = b4;
        if (h) {
            if (c4(0x278) !== c4(0x278)) u[c4(0x296)](v[c4(0x2bb)](w['get'](o)['queryIdx'])['pt']['x']), p['push'](z['get'](A[c4(0x2bb)](B)[c4(0x223)])['pt']['y']), C['push'](D[c4(0x2bb)](E[c4(0x2bb)](F)[c4(0x25c)])['pt']['x']), G['push'](H[c4(0x2bb)](I[c4(0x2bb)](J)[c4(0x25c)])['pt']['y']);
            else {
                var j = new cv[(c4(0x1f7))]();
                e[c4(0x2a3)](j), cv[c4(0x2c0)](j, j, cv[c4(0x285)], 0x0);
                var k = new cv[(c4(0x19b))](0xff, 0x0, 0x0),
                    l = new cv[(c4(0x19b))](0xff, 0xff, 0x0);
            }
        }
        var m = [];
        for (var n = 0x0; n < g['size'](); n++) {
            var o = g[c4(0x2bb)](n)['pt']['x'],
                p = g[c4(0x2bb)](n)['pt']['y'];
            m[c4(0x296)](o), m[c4(0x296)](p);
        }
        var q = new cv[(c4(0x1c1))](m[c4(0x2a9)] / 0x2, 0x2, cv[c4(0x29c)], m),
            r = new cv[(c4(0x1f7))](),
            s = new cv[(c4(0x1a8))](cv[c4(0x294)] + cv[c4(0x1e8)], 0xa, 0.03),
            t = new cv[(c4(0x1f7))](),
            u = [];
        cv[c4(0x2b4)](f, e, q, r, t, new cv[(c4(0x1f7))](), new cv[(c4(0x28a))](0xf, 0xf), 0x2, s);
        var v = new cv[(c4(0x292))]();
        for (var n = 0x0; n < r['size']()[c4(0x273)]; n++) {
            if (c4(0x2cf) !== c4(0x241)) {
                var o = r[c4(0x1fd)][n * 0x2],
                    p = r['data32F'][n * 0x2 + 0x1];
                v[c4(0x2a7)]({
                    'pt': {
                        'x': o,
                        'y': p
                    },
                    'angle': 0x0,
                    'class_id': 0x0,
                    'octave': 0x0,
                    'response': 0x0,
                    'size': 0x0
                });
                if (t['data'][n] == 0x1) {
                    if ('TYZbt' === c4(0x1f0)) return g['toString']()[c4(0x1fe)]('(((.+)+)+)+$')[c4(0x24b)]()[c4(0x1ed)](h)[c4(0x1fe)](c4(0x21b));
                    else {
                        if (h) cv[c4(0x276)](j, new cv[(c4(0x1fa))](o, p), 0x5, l, 0x3);
                    }
                } else {
                    if (h) cv[c4(0x276)](j, new cv['Point'](o, p), 0x5, k, 0x3);
                    u[c4(0x296)][n];
                }
            } else {
                var B = new m[(c4(0x1f7))](),
                    C = new n['Scalar'](0xff, 0x0, 0xff);
                o[c4(0x1c6)](p, q, r, s, t, B, C), B[c4(0x29f)]();
            }
        }
        if (h) {
            ;
            j[c4(0x29f)]();
        }
        return q[c4(0x29f)](), r[c4(0x29f)](), {
            'newKeypoints': v,
            'errors': u
        };
    }#
    f024(e, f, g, j = null, k = ![], l) {
        var c5 = b4;
        if (k) {
            var m = new cv[(c5(0x1f7))]();
            cv[c5(0x2c0)](l, m, cv[c5(0x285)], 0x0);
        }
        var n = Math[c5(0x1a9)](e, f);
        e = e / n * 0.5, f = f / n * 0.5;
        var o = [-e, f, 0x0, e, f, 0x0, e, -f, 0x0, -e, -f, 0x0],
            p = [];
        for (var q = 0x0; q < g[c5(0x1fd)][c5(0x2a9)]; q += 0x2) {
            p[c5(0x296)](g[c5(0x1fd)][q]), p[c5(0x296)](g[c5(0x1fd)][q + 0x1]), k && cv[c5(0x276)](m, new cv['Point'](g[c5(0x1fd)][q], g[c5(0x1fd)][q + 0x1]), 0x3, new cv['Scalar'](0xff, 0x0, 0x0), 0x3);
        }
        p = cv[c5(0x1c1)](p['length'] / 0x2, 0x2, cv[c5(0x29c)], p), o = cv[c5(0x1c1)](o[c5(0x2a9)] / 0x3, 0x3, cv[c5(0x29c)], o);
        var r = new cv['Mat'](0x3, 0x1, cv[c5(0x29c)]),
            s = new cv['Mat'](0x3, 0x1, cv[c5(0x29c)]),
            t = ![];
        if (j) {
            if (c5(0x1be) !== c5(0x1be)) {
                var z = q[c5(0x192)](c5(0x244))[c5(0x28f)];
                j['WEBCAM_SETTINGS'][c5(0x2bd)]['deviceId'] = z;;
                var A = k[c5(0x192)](c5(0x244));
                l['WEBCAM_NAME'] = A[A[c5(0x25e)]][c5(0x2b6)];
            } else {
                j[c5(0x247)][c5(0x2a3)](r);
                var s = new cv[(c5(0x1f7))](0x3, 0x1, cv[c5(0x29c)]);
                cv['Rodrigues'](j[c5(0x1d6)], s), t = !![];
            }
        }
        var u = cv[c5(0x290)](o, p, this.#p044, this.#p045, s, r, t, cv[c5(0x1dd)]),
            v = new cv[(c5(0x1f7))]();
        cv[c5(0x239)](s, v);
        if (k) {
            if (c5(0x2ac) !== c5(0x293)) {
                var x = [0x0, 0x0, 0x0, 0.25, 0x0, 0x0, 0x0, 0.25, 0x0, 0x0, 0x0, 0.25, -e, f, 0x0, e, f, 0x0, e, -f, 0x0, -e, -f, 0x0],
                    x = cv[c5(0x1c1)](0x8, 0x3, cv['CV_32F'], x);
                cv[c5(0x233)](x, s, r, this.#p044, this.#p045, x), cv[c5(0x1d8)](m, new cv[(c5(0x1fa))](x['data32F'][0x0], x['data32F'][0x1]), new cv[(c5(0x1fa))](x[c5(0x1fd)][0x2], x[c5(0x1fd)][0x3]), new cv[(c5(0x19b))](0xff, 0x0, 0x0), 0x2), cv[c5(0x1d8)](m, new cv[(c5(0x1fa))](x['data32F'][0x0], x[c5(0x1fd)][0x1]), new cv[(c5(0x1fa))](x[c5(0x1fd)][0x4], x[c5(0x1fd)][0x5]), new cv[(c5(0x19b))](0x0, 0xff, 0x0), 0x2), cv[c5(0x1d8)](m, new cv[(c5(0x1fa))](x[c5(0x1fd)][0x0], x[c5(0x1fd)][0x1]), new cv[(c5(0x1fa))](x['data32F'][0x6], x[c5(0x1fd)][0x7]), new cv[(c5(0x19b))](0x0, 0x0, 0xff), 0x2), cv[c5(0x1d8)](m, new cv[(c5(0x1fa))](x[c5(0x1fd)][0x8], x[c5(0x1fd)][0x9]), new cv[(c5(0x1fa))](x['data32F'][0xa], x['data32F'][0xb]), new cv['Scalar'](0xff, 0x0, 0xff), 0x2), cv[c5(0x1d8)](m, new cv[(c5(0x1fa))](x['data32F'][0xa], x[c5(0x1fd)][0xb]), new cv[(c5(0x1fa))](x[c5(0x1fd)][0xc], x[c5(0x1fd)][0xd]), new cv[(c5(0x19b))](0xff, 0x0, 0xff), 0x2), cv['line'](m, new cv[(c5(0x1fa))](x[c5(0x1fd)][0xc], x[c5(0x1fd)][0xd]), new cv[(c5(0x1fa))](x[c5(0x1fd)][0xe], x[c5(0x1fd)][0xf]), new cv[(c5(0x19b))](0xff, 0x0, 0xff), 0x2), cv[c5(0x1d8)](m, new cv['Point'](x[c5(0x1fd)][0xe], x[c5(0x1fd)][0xf]), new cv['Point'](x[c5(0x1fd)][0x8], x[c5(0x1fd)][0x9]), new cv[(c5(0x19b))](0xff, 0x0, 0xff), 0x2), x[c5(0x29f)]();;
                m[c5(0x29f)]();
            } else {
                const A = q['length'],
                    B = j[c5(0x2eb)]((C, D) => C + D) / A;
                return k[c5(0x1b5)](C => A[c5(0x24c)](C - B, 0x2))['reduce']((C, D) => C + D) / A;
            }
        }
        return p[c5(0x29f)](), o[c5(0x29f)](), {
            'rotMat': v,
            'tvec': r
        };
    }#
    f025(e, f, g, h) {
        var c6 = b4,
            i = this.#p055[c6(0x1ed)]('true'),
            j = i[c6(0x195)][f];
        if (!j[c6(0x1b2)]) {
            if (c6(0x1a1) === c6(0x1f9)) f();
            else return j[c6(0x1b2)] = e, {
                'valid': !![],
                'deltapos': 0x0,
                'deltaup': 0x1,
                'deltaforward': 0x1
            };
        }
        var k = j[c6(0x1b2)][c6(0x247)],
            l = e['tvec'],
            m = Math[c6(0x24c)](l[c6(0x1fd)][0x0] - k['data32F'][0x0], 0x2) + Math[c6(0x24c)](l[c6(0x1fd)][0x1] - k[c6(0x1fd)][0x1], 0x2) + Math['pow'](l[c6(0x1fd)][0x2] - k[c6(0x1fd)][0x2], 0x2),
            n = j['lastPose'][c6(0x1d6)],
            o = new cv[(c6(0x1f7))](0x3, 0x1, cv[c6(0x29c)]);
        o[c6(0x1fd)][0x0] = n[c6(0x1fd)][0x3], o[c6(0x1fd)][0x1] = n[c6(0x1fd)][0x4], o[c6(0x1fd)][0x2] = n['data32F'][0x5];
        var p = new cv[(c6(0x1f7))](0x3, 0x1, cv['CV_32F']);
        p[c6(0x1fd)][0x0] = e['rotMat']['data32F'][0x3], p[c6(0x1fd)][0x1] = e[c6(0x1d6)][c6(0x1fd)][0x4], p[c6(0x1fd)][0x2] = e[c6(0x1d6)][c6(0x1fd)][0x5];
        var q = new cv[(c6(0x1f7))](0x3, 0x1, cv[c6(0x29c)]);
        q[c6(0x1fd)][0x0] = n[c6(0x1fd)][0x6], q[c6(0x1fd)][0x1] = n[c6(0x1fd)][0x7], q['data32F'][0x2] = n[c6(0x1fd)][0x8];
        var r = new cv[(c6(0x1f7))](0x3, 0x1, cv['CV_32F']);
        r[c6(0x1fd)][0x0] = e[c6(0x1d6)][c6(0x1fd)][0x6], r['data32F'][0x1] = e['rotMat'][c6(0x1fd)][0x7], r[c6(0x1fd)][0x2] = e[c6(0x1d6)][c6(0x1fd)][0x8];
        var s = p['dot'](o),
            t = r[c6(0x2cc)](q);
        o[c6(0x29f)](), p['delete'](), q[c6(0x29f)](), r['delete']();
        if (h);
        if (m < this.#p033 && s > this.#p034 && t > this.#p034) {
            j[c6(0x1b2)][c6(0x247)][c6(0x29f)](), j[c6(0x1b2)][c6(0x1d6)]['delete'](), j[c6(0x1b2)] = e;
            var u = this.#p042 - this.#p040,
                v = (0x1 - Math[c6(0x1f2)](g, 0x1)) * u / 0.25 + this.#p040,
                w = this.#p041 - this.#p043,
                x = (0x1 - Math[c6(0x1f2)](g, 0x1)) * -w / 0.25 + this.#p041;
            j['lastPoseIsStable'] = m < v && s > x && t > x;;
            return {
                'valid': !![],
                'deltapos': m,
                'deltaup': s,
                'deltaforward': t
            };
        } else return {
            'valid': ![],
            'deltapos': m,
            'deltaup': s,
            'deltaforward': t
        };
    }#
    f026(e, f, g) {
        var c7 = b4;
        if (!f) return e;
        var h = e['tvec'],
            i = f[c7(0x247)],
            j = Math[c7(0x24c)](h[c7(0x1fd)][0x0] - i['data32F'][0x0], 0x2) + Math['pow'](h['data32F'][0x1] - i['data32F'][0x1], 0x2) + Math[c7(0x24c)](h['data32F'][0x2] - i['data32F'][0x2], 0x2),
            k = f['rotMat'],
            l = new cv[(c7(0x1f7))](0x3, 0x1, cv[c7(0x29c)]);
        l['data32F'][0x0] = k[c7(0x1fd)][0x3], l[c7(0x1fd)][0x1] = k['data32F'][0x4], l[c7(0x1fd)][0x2] = k[c7(0x1fd)][0x5];
        var m = new cv['Mat'](0x3, 0x1, cv[c7(0x29c)]);
        m['data32F'][0x0] = e[c7(0x1d6)][c7(0x1fd)][0x3], m['data32F'][0x1] = e[c7(0x1d6)][c7(0x1fd)][0x4], m['data32F'][0x2] = e[c7(0x1d6)][c7(0x1fd)][0x5];
        var n = new cv[(c7(0x1f7))](0x3, 0x1, cv['CV_32F']);
        n[c7(0x1fd)][0x0] = k[c7(0x1fd)][0x6], n['data32F'][0x1] = k[c7(0x1fd)][0x7], n[c7(0x1fd)][0x2] = k[c7(0x1fd)][0x8];
        var o = new cv[(c7(0x1f7))](0x3, 0x1, cv['CV_32F']);
        o[c7(0x1fd)][0x0] = e['rotMat'][c7(0x1fd)][0x6], o[c7(0x1fd)][0x1] = e['rotMat']['data32F'][0x7], o[c7(0x1fd)][0x2] = e['rotMat'][c7(0x1fd)][0x8];
        var p = m['dot'](l),
            q = o[c7(0x2cc)](n);
        l[c7(0x29f)](), m[c7(0x29f)](), n[c7(0x29f)](), o[c7(0x29f)]();
        if (j < this.#p038 && p > this.#p039 && q > this.#p039) {
            if (c7(0x2bf) === c7(0x2bf)) {
                if (g);
                return f;
            } else j['rectangle'](k, l, m, new n['Scalar'](0xff, 0xff, 0x0), 0x1);
        } else {
            if (g);
            return e;
        }
    }#
    f027(e) {
        var c8 = b4,
            f = this.#p055[c8(0x1ed)](c8(0x254)),
            g = f['untracked'][e];
        g[c8(0x270)] = {}, g['kalman']['kf'] = new cv['KalmanFilter'](0x15, 0x7, 0x0, cv[c8(0x29c)]), g['kalman'][c8(0x21f)] = new cv[(c8(0x1f7))](0x15, 0x1, cv[c8(0x29c)]), g[c8(0x270)][c8(0x1b9)] = new cv['Mat'](0x7, 0x1, cv[c8(0x29c)]), this.#f035(g[c8(0x270)]['kf'], 0x1 / this[c8(0x20f)]), g[c8(0x270)]['kf'][c8(0x245)] = cv[c8(0x1c1)](0x7, 0x15, cv[c8(0x29c)], [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]), this.#f031(g[c8(0x270)]['kf'][c8(0x2ad)]), this.#f032(g[c8(0x270)]['kf'][c8(0x2d4)]), g['kalman']['kf'][c8(0x1bb)]['delete'](), g[c8(0x270)]['state'][c8(0x2a3)](g[c8(0x270)]['kf']['statePre']), g[c8(0x270)]['kf'][c8(0x2ee)][c8(0x29f)](), g[c8(0x270)][c8(0x21f)][c8(0x2a3)](g[c8(0x270)]['kf'][c8(0x2ee)]), g[c8(0x270)]['hasPrediction'] = ![];
    }#
    f028(e) {
        var c9 = b4,
            f = this.#p055['constructor'](c9(0x254)),
            g = f[c9(0x195)][e];
        this.#f031(g[c9(0x270)]['kf'][c9(0x1e0)]), g['kalman']['state'][c9(0x29f)](), g[c9(0x270)][c9(0x21f)] = cv[c9(0x1c1)](0x15, 0x1, cv[c9(0x29c)], [g[c9(0x270)]['meas'][c9(0x1fd)][0x0], g[c9(0x270)][c9(0x1b9)][c9(0x1fd)][0x1], g[c9(0x270)][c9(0x1b9)][c9(0x1fd)][0x2], 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, g['kalman']['meas']['data32F'][0x3], g[c9(0x270)]['meas'][c9(0x1fd)][0x4], g['kalman'][c9(0x1b9)]['data32F'][0x5], g['kalman'][c9(0x1b9)][c9(0x1fd)][0x6], 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]), g['kalman']['kf'][c9(0x2ee)]['delete'](), g[c9(0x270)]['state'][c9(0x2a3)](g[c9(0x270)]['kf'][c9(0x2ee)]), g[c9(0x270)]['hasPrediction'] = ![];
    }#
    f029(e, f) {
        var ca = b4,
            g = this.#p055[ca(0x1ed)]('true'),
            h = g[ca(0x195)][e];
        this.#f035(h[ca(0x270)]['kf'], f), h['kalman']['state'][ca(0x29f)](), h['kalman'][ca(0x21f)] = h['kalman']['kf']['predict']();
        var l = cv[ca(0x1c1)](0x3, 0x4, cv['CV_32F'], [h[ca(0x270)][ca(0x21f)]['data32F'][0x0], h[ca(0x270)][ca(0x21f)]['data32F'][0x1], h[ca(0x270)][ca(0x21f)]['data32F'][0x2]]),
            m = h['kalman'][ca(0x21f)][ca(0x1fd)][0x9],
            n = h[ca(0x270)][ca(0x21f)][ca(0x1fd)][0xa],
            o = h[ca(0x270)][ca(0x21f)][ca(0x1fd)][0xb],
            p = h[ca(0x270)][ca(0x21f)]['data32F'][0xc],
            q = Math[ca(0x25b)](m * m + n * n + o * o + p * p);
        m /= q, n /= q, o /= q, p /= q;
        var r = cv[ca(0x1c1)](0x3, 0x3, cv['CV_32F'], [m * m + n * n + o * o + p * p, 0x2 * (n * o - m * p), 0x2 * (n * p + m * o), 0x2 * (n * o + m * p), m * m - n * n + o * o - p * p, 0x2 * (o * p - m * n), 0x2 * (n * p - m * o), 0x2 * (o * p + m * n), m * m - n * n - o * o + p * p]);
        return {
            'rotMat': r,
            'tvec': l
        };
    }#
    f030(e, f) {
        var cb = b4,
            g = this.#p055['constructor'](cb(0x254)),
            h = g['tracked'][e],
            l = f[cb(0x247)],
            m = f[cb(0x1d6)]['t'](),
            n = m[cb(0x1fd)][0x0] + m[cb(0x1fd)][0x4] + m[cb(0x1fd)][0x8],
            o, p, q, r;
        if (n > 0x0) {
            var s = Math['sqrt'](n + 0x1) * 0x2;
            o = 0.25 * s, p = (m['data32F'][0x5] - m['data32F'][0x7]) / s, q = (m['data32F'][0x6] - m[cb(0x1fd)][0x2]) / s, r = (m['data32F'][0x1] - m[cb(0x1fd)][0x3]) / s;
        } else {
            if (m[cb(0x1fd)][0x0] > m[cb(0x1fd)][0x4] & m['data32F'][0x0] > m[cb(0x1fd)][0x8]) {
                var s = Math['sqrt'](0x1 + m[cb(0x1fd)][0x0] - m['data32F'][0x4] - m['data32F'][0x8]) * 0x2;
                o = (m['data32F'][0x5] - m[cb(0x1fd)][0x7]) / s, p = 0.25 * s, q = (m[cb(0x1fd)][0x3] + m['data32F'][0x1]) / s, r = (m[cb(0x1fd)][0x6] + m['data32F'][0x2]) / s;
            } else {
                if (m[cb(0x1fd)][0x4] > m[cb(0x1fd)][0x8]) {
                    if (cb(0x22e) !== cb(0x22e)) {
                        var z = h['apply'](i, arguments);
                        return j = null, z;
                    } else {
                        var s = Math[cb(0x25b)](0x1 + m[cb(0x1fd)][0x4] - m[cb(0x1fd)][0x0] - m[cb(0x1fd)][0x8]) * 0x2;
                        o = (m[cb(0x1fd)][0x6] - m[cb(0x1fd)][0x2]) / s, p = (m[cb(0x1fd)][0x3] + m[cb(0x1fd)][0x1]) / s, q = 0.25 * s, r = (m['data32F'][0x7] + m[cb(0x1fd)][0x5]) / s;
                    }
                } else {
                    var s = Math[cb(0x25b)](0x1 + m[cb(0x1fd)][0x8] - m[cb(0x1fd)][0x0] - m['data32F'][0x4]) * 0x2;
                    o = (m[cb(0x1fd)][0x1] - m[cb(0x1fd)][0x3]) / s, p = (m[cb(0x1fd)][0x6] + m['data32F'][0x2]) / s, q = (m[cb(0x1fd)][0x7] + m[cb(0x1fd)][0x5]) / s, r = 0.25 * s;
                }
            }
        }
        if (this[cb(0x20b)]) {
            var t = this['lastw'] - o,
                u = this[cb(0x281)] - p,
                v = this[cb(0x283)] - q,
                x = this['lastk'] - r;
            (t * t > 0x1 || u * u > 0x1 || v * v > 0x1 || x * x > 0x1) && (cb(0x286) === cb(0x2ae) ? f[cb(0x1c2)][cb(0x24e)] = 'none' : (o *= -0x1, p *= -0x1, q *= -0x1, r *= -0x1));
        }
        this[cb(0x20b)] = o, this['lasti'] = p, this[cb(0x283)] = q, this[cb(0x24a)] = r;
        if (!h['kalman'][cb(0x1d1)]) {
            if (cb(0x2b3) !== cb(0x2ec)) h[cb(0x270)][cb(0x21f)][cb(0x29f)](), h[cb(0x270)][cb(0x21f)] = cv[cb(0x1c1)](0x15, 0x1, cv[cb(0x29c)], [l[cb(0x1fd)][0x0], l[cb(0x1fd)][0x1], l[cb(0x1fd)][0x2], 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, o, p, q, r, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]), h[cb(0x270)]['kf'][cb(0x1bb)][cb(0x29f)](), h[cb(0x270)][cb(0x21f)][cb(0x2a3)](h['kalman']['kf'][cb(0x1bb)]), h[cb(0x270)]['kf'][cb(0x2ee)]['delete'](), h['kalman']['state'][cb(0x2a3)](h[cb(0x270)]['kf'][cb(0x2ee)]);
            else {
                if (arguments[cb(0x2a9)] == 0x1) return p[arguments[0x0]];
                arguments[cb(0x2a9)] == 0x2 && (q[arguments[0x0]] = arguments[0x1]);
            }
        }
        h['kalman'][cb(0x1b9)][cb(0x1fd)][0x0] = l[cb(0x1fd)][0x0], h[cb(0x270)][cb(0x1b9)][cb(0x1fd)][0x1] = l[cb(0x1fd)][0x1], h['kalman'][cb(0x1b9)][cb(0x1fd)][0x2] = l[cb(0x1fd)][0x2], h[cb(0x270)][cb(0x1b9)][cb(0x1fd)][0x3] = o, h[cb(0x270)][cb(0x1b9)][cb(0x1fd)][0x4] = p, h[cb(0x270)][cb(0x1b9)]['data32F'][0x5] = q, h[cb(0x270)][cb(0x1b9)][cb(0x1fd)][0x6] = r, h['kalman']['kf'][cb(0x213)](h[cb(0x270)][cb(0x1b9)]), h[cb(0x270)][cb(0x1d1)] = !![];
    }#
    f031(g) {
        var cc = b4,
            h = this.#p025,
            i = this.#p026,
            j = this.#p027,
            k = this.#p028,
            l = this.#p029,
            m = this.#p030,
            o = cv[cc(0x1c1)](0x15, 0x15, cv[cc(0x29c)], [h, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, h, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, h, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, i, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, i, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, i, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, j, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, j, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, j, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, k, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, k, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, k, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, k, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, l, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, l, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, l, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, l, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, m, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, m, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, m, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, m]);
        o[cc(0x2a3)](g), o[cc(0x29f)]();
    }#
    f032(e) {
        var cd = b4,
            f = this.#p023,
            g = this.#p024,
            h = cv[cd(0x1c1)](0x7, 0x7, cv[cd(0x29c)], [f, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, f, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, f, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, g, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, g, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, g, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, g]);
        h[cd(0x2a3)](e), h[cd(0x29f)]();
    }#
    f033() {
        ;
    }#
    f034(e, f) {
        var ce = b4;
        this.#p023 = e, this.#p024 = f;
        var g = this.#p055[ce(0x1ed)](ce(0x254)),
            h = Object[ce(0x238)](g['untracked']);
        h[ce(0x2d8)](i => {
            var cf = ce,
                j = g[cf(0x2dc)][i];
            this.#f032(j[cf(0x270)]['kf'][cf(0x2d4)]);
        });
    }#
    f035(e, f) {
        var cg = b4,
            g = 0.5 * f * f;
        e[cg(0x1a5)]['data32F'][0x3] = f, e[cg(0x1a5)][cg(0x1fd)][0x19] = f, e['transitionMatrix'][cg(0x1fd)][0x2f] = f, e['transitionMatrix'][cg(0x1fd)][0x45] = f, e[cg(0x1a5)]['data32F'][0x5b] = f, e[cg(0x1a5)]['data32F'][0x71] = f, e['transitionMatrix'][cg(0x1fd)][0xca] = f, e[cg(0x1a5)][cg(0x1fd)][0xe0] = f, e['transitionMatrix'][cg(0x1fd)][0xf6] = f, e[cg(0x1a5)][cg(0x1fd)][0x10c] = f, e[cg(0x1a5)][cg(0x1fd)][0x122] = f, e[cg(0x1a5)]['data32F'][0x138] = f, e[cg(0x1a5)]['data32F'][0x14e] = f, e[cg(0x1a5)][cg(0x1fd)][0x164] = f, e[cg(0x1a5)][cg(0x1fd)][0x6] = g, e[cg(0x1a5)][cg(0x1fd)][0x1c] = g, e['transitionMatrix'][cg(0x1fd)][0x32] = g, e[cg(0x1a5)][cg(0x1fd)][0xce] = g, e['transitionMatrix']['data32F'][0xe4] = g, e[cg(0x1a5)][cg(0x1fd)][0xfa] = g, e[cg(0x1a5)][cg(0x1fd)][0x110] = g;
    }#
    f036(e, f) {
        var ch = b4,
            g = [],
            j = 0x1,
            k = 0x0,
            l = 0x1,
            m = 0x0,
            o = [],
            p = [];
        for (var q = 0x0; q < f[ch(0x224)][ch(0x1a7)](); q++) {
            var r = f['matches']['get'](q);
            g[ch(0x296)](r[ch(0x25c)]);
            var s = f[ch(0x224)][ch(0x1a7)](),
                t = f[ch(0x1b6)][ch(0x1a7)]()[ch(0x1a3)],
                u = f[ch(0x1b6)][ch(0x1a7)]()[ch(0x273)],
                v = f['kp'][ch(0x2bb)](r[ch(0x25c)])['pt']['x'] / t,
                z = f['kp']['get'](r[ch(0x25c)])['pt']['y'] / u;
            if (v < j) j = v;
            else {
                if (v > k) k = v;
            }
            if (z < l) l = z;
            else {
                if (z > m) m = z;
            }
            o[ch(0x296)](v), p[ch(0x296)](z);
        }
        var A = this.#f047(o),
            B = this.#f047(p),
            C = (k - j) * (m - l),
            D = (C + 0xa * A + 0xa * B) / 0x3;;;;;
        if (!f['bestMatchQuality'] || D > f[ch(0x228)]) {
            if (ch(0x1e6) !== 'qmgqk') {
                f[ch(0x228)] = D, f['idealMatches'] = g;;
            } else {
                if (g['roi']) delete u['roi'];
            }
        }
        if (f[ch(0x1d9)]) {
            if (ch(0x1c0) === ch(0x199)) return;
            else {
                var E = f[ch(0x1d9)]['x'] > 0x0,
                    F = f[ch(0x1d9)]['x'] + f[ch(0x1d9)][ch(0x1a3)] < e[ch(0x1a7)]()[ch(0x1a3)],
                    G = f[ch(0x1d9)]['y'] > 0x0,
                    H = f['roi']['y'] + f[ch(0x1d9)][ch(0x273)] < e[ch(0x1a7)]()['height'];
                if (C < 0.5 * f[ch(0x2b8)] && (E && F && G && H)) {
                    if (ch(0x231) === ch(0x2cb)) {
                        var N = k ? function () {
                            if (N) {
                                var O = u['apply'](v, arguments);
                                return w = null, O;
                            }
                        } : function () {};
                        return p = ![], N;
                    } else {
                        ;
                        if (f[ch(0x228)] && f[ch(0x228)] > D) {
                            var I = 0x0;
                            f[ch(0x224)][ch(0x29f)](), f['matches'] = new cv[(ch(0x1b0))]();
                            for (var q = 0x0; q < f['idealMatches']['length']; q++) {
                                if (ch(0x28d) !== ch(0x28d)) {
                                    ;
                                    if (s[ch(0x228)] && o['bestMatchQuality'] > p) {
                                        var O = 0x0;
                                        t['matches'][ch(0x29f)](), v[ch(0x224)] = new z[(ch(0x1b0))]();
                                        for (var P = 0x0; P < z[ch(0x20d)][ch(0x2a9)]; P++) {
                                            var Q = {
                                                'distance': 0x64,
                                                'imgIdx': 0x0,
                                                'queryIdx': 0x0,
                                                'trainIdx': C[ch(0x20d)][P]
                                            };
                                            D[ch(0x224)]['push_back'](Q), O++;
                                        };
                                        return;
                                    }
                                } else {
                                    var r = {
                                        'distance': 0x64,
                                        'imgIdx': 0x0,
                                        'queryIdx': 0x0,
                                        'trainIdx': f[ch(0x20d)][q]
                                    };
                                    f[ch(0x224)][ch(0x2a7)](r), I++;
                                }
                            };
                            return;
                        }
                    }
                }
            }
        }
        var I = 0x0;
        while (f[ch(0x224)][ch(0x1a7)]() < this[ch(0x1ad)] && f[ch(0x224)][ch(0x1a7)]() < f['kp'][ch(0x1a7)]()) {
            if (ch(0x279) !== ch(0x215)) {
                var J = this[ch(0x1b8)](0x0, f['kp'][ch(0x1a7)]() - 0x1);
                if (g[ch(0x1a2)](J)) continue;
                var r = {
                    'distance': 0x64,
                    'imgIdx': 0x0,
                    'queryIdx': 0x0,
                    'trainIdx': J
                };
                f[ch(0x224)][ch(0x2a7)](r), I++;
            } else {
                var P = P[ch(0x1fd)][Q * 0x2],
                    Q = z[ch(0x1fd)][A * 0x2 + 0x1];
                B[ch(0x2a7)]({
                    'pt': {
                        'x': P,
                        'y': Q
                    },
                    'angle': 0x0,
                    'class_id': 0x0,
                    'octave': 0x0,
                    'response': 0x0,
                    'size': 0x0
                });
                if (C[ch(0x26f)][D] == 0x1) {
                    if (Q) R['circle'](S, new T[(ch(0x1fa))](P, Q), 0x5, U, 0x3);
                } else {
                    if (V) W['circle'](X, new Y[(ch(0x1fa))](P, Q), 0x5, Z, 0x3);
                    a0[ch(0x296)][a1];
                }
            }
        };
        return;
    }#
    f037(e) {
        var ci = b4;
        console[ci(0x1af)](ci(0x2aa) + e), window[ci(0x2a8)][ci(0x2c4)](this['TRACKER_NAME'], ci(0x272), e);
    }#
    f038(e) {
        var cj = b4;
        console[cj(0x1af)](cj(0x2b1) + e), window[cj(0x2a8)][cj(0x2c4)](this[cj(0x1ff)], 'OnTrackingLost', e);
    }#
    f039(e, f) {
        var ck = b4,
            g = new cv[(ck(0x1f7))](),
            h = new cv[(ck(0x1f7))]();
        f['tvec']['copyTo'](g), f[ck(0x1d6)][ck(0x2a3)](h), g['data32F'][0x1] *= -0x1, h = h['t']();
        var i = [0x1, 0x0, 0x0, 0x0, -0x1, 0x0, 0x0, 0x0, 0x1];
        i = cv[ck(0x1c1)](0x3, 0x3, cv[ck(0x29c)], i), cv[ck(0x274)](i, h, 0x1, h, 0x0, h, 0x0), cv[ck(0x274)](h, i, 0x1, h, 0x0, h, 0x0), i[ck(0x29f)]();
        var j = [0x0, 0x0, -0x1, 0x0, -0x1, 0x0, -0x1, 0x0, 0x0];
        j = cv['matFromArray'](0x3, 0x3, cv[ck(0x29c)], j), cv[ck(0x274)](j, h, 0x1, h, 0x0, h, 0x0), j['delete']();
        var k = e + ',' + g['data32F'][0x0] + ',' + g[ck(0x1fd)][0x1] + ',' + g[ck(0x1fd)][0x2] + ',' + h[ck(0x1fd)][0x0] + ',' + h['data32F'][0x1] + ',' + h[ck(0x1fd)][0x2] + ',' + h[ck(0x1fd)][0x3] + ',' + h[ck(0x1fd)][0x4] + ',' + h[ck(0x1fd)][0x5] + ',' + h[ck(0x1fd)][0x6] + ',' + h[ck(0x1fd)][0x7] + ',' + h[ck(0x1fd)][0x8] + ',';
        g['delete'](), h[ck(0x29f)](), window[ck(0x2a8)][ck(0x2c4)](this[ck(0x1ff)], 'OnTrack', k);
    }#
    f040() {
        var cl = b4;
        if (!iTracker[cl(0x256)]) {
            if ('laDLA' === cl(0x1f6)) return;
            else g[cl(0x296)](m);
        }
        var e = document[cl(0x29a)]('#unity-canvas');
        e[cl(0x1c2)][cl(0x1a3)] = window[cl(0x268)] + 'px', e[cl(0x1c2)][cl(0x273)] = window[cl(0x20c)] + 'px';
        var f = document[cl(0x192)](cl(0x20a)),
            g = document[cl(0x192)](cl(0x20a))[cl(0x2c8)]();;
        var i = iTracker[cl(0x229)],
            j = window['innerWidth'],
            k = window[cl(0x20c)],
            l = j / k;;
        if (l > i) {
            document['body'][cl(0x1c2)][cl(0x273)] = window[cl(0x20c)] + 'px';
            var m = document[cl(0x192)](cl(0x221))[cl(0x2c8)]()[cl(0x273)];
            i *= window['innerHeight'] / m, f[cl(0x1c2)][cl(0x1a3)] = window[cl(0x268)] + 'px', f[cl(0x1c2)][cl(0x273)] = window[cl(0x268)] / i + 'px', i = iTracker[cl(0x229)] * (window['innerWidth'] / iTracker[cl(0x229)] / m);
        } else {
            document[cl(0x1bd)]['style'][cl(0x273)] = window[cl(0x20c)] + 'px';
            var m = document[cl(0x192)](cl(0x221))['getBoundingClientRect']()[cl(0x273)];
            i *= window[cl(0x20c)] / m;;
            f[cl(0x1c2)][cl(0x273)] = window['innerHeight'] + 'px', f[cl(0x1c2)]['width'] = window[cl(0x20c)] * i + 'px';
        }
        var n = 0.5 * iTracker['CANVAS_WIDTH'] / i,
            o = iTracker[cl(0x256)],
            p = 0x2 * Math[cl(0x197)](n / o) * 0xb4 / Math['PI'];
        this[cl(0x191)] = p;;
        window[cl(0x2a8)][cl(0x2c4)](this['TRACKER_NAME'], cl(0x243), p), window['unityInstance'][cl(0x2c4)](this['TRACKER_NAME'], cl(0x2d6), iTracker['VIDEO']['videoWidth'] + ',' + iTracker[cl(0x26b)][cl(0x1ea)]);
    }#
    f041(e, f) {
        var cm = b4,
            g = 0x1,
            h = document['getElementById'](f);
        if (!h) {
            if (cm(0x190) !== cm(0x23a)) {
                h = document[cm(0x291)](cm(0x2a1)), h['id'] = f, document[cm(0x1bd)][cm(0x21e)](h);
                if (!this[cm(0x226)]) this['debugIds'] = [];
                this[cm(0x226)]['push'](f), h['style'][cm(0x210)] = cm(0x23f), h[cm(0x1c2)][cm(0x1d4)] = 0x0, h[cm(0x1c2)]['left'] = 0x0, h['style'][cm(0x2b0)] = cm(0x2e7) + g + ')';
            } else g += h + ',';
        }
        cv[cm(0x23d)](f, e);
        var i = this[cm(0x226)]['indexOf'](f);
        if (i != -0x1) {
            if (cm(0x222) === cm(0x2c1)) {
                let l = new k['Mat'](),
                    m = {
                        'width': this[cm(0x256)],
                        'height': this[cm(0x250)]
                    };
                l['warpPerspective'](m, l, n, m, o[cm(0x1c9)]);
                if (p);
                return l;
            } else h[cm(0x1c2)][cm(0x19d)] = i * e[cm(0x1a7)]()[cm(0x1a3)] * g + 'px';
        }
    }#
    f042(e) {
        var cn = b4,
            f = document['getElementById'](e);
        if (f) {
            f['remove']();
            var g = this[cn(0x226)]['indexOf'](e);
            g !== -0x1 && this[cn(0x226)][cn(0x289)](g, 0x1);
        }
    }#
    f043(e, f) {
        var co = b4;
        if (!this[co(0x265)]) this['debugImages'] = {};
        this[co(0x265)][f] = e;
    }#
    f044(e) {
        var cp = b4;
        if (this[cp(0x265)] && this[cp(0x265)][e]) return this[cp(0x265)][e];
        else return;
    }#
    f045(e) {
        var cq = b4;
        this['debugImages'] && this[cq(0x265)][e] && (this[cq(0x265)][e][cq(0x29f)](), this[cq(0x265)][e] = null);
    } [b4(0x1b8)](e, f) {
        var cr = b4;
        return Math[cr(0x2a5)](Math[cr(0x26d)]() * (f - e + 0x1) + e);
    } [b4(0x287)](e) {
        return Math['round'](e * 0x3e8) / 0x3e8;
    } [b4(0x2ba)](e) {
        var cs = b4,
            f = document[cs(0x192)](cs(0x20a)),
            g = f[cs(0x232)](e);
        return g;
    } ['getWarpedTexture'](e) {
        return iTracker.#f046(e);
    }#
    f046(e) {
        var ct = b4,
            f = this.#p055[ct(0x1ed)](ct(0x254)),
            g = f[ct(0x195)][e];;
        if (g) {
            let m = new cv[(ct(0x1f7))](),
                n = g[ct(0x1b6)][ct(0x1a7)]()[ct(0x1a3)] / g[ct(0x1b6)][ct(0x1a7)]()[ct(0x273)],
                o = this.#p047['size']()[ct(0x1a3)] / g[ct(0x1b6)][ct(0x1a7)]()[ct(0x1a3)],
                p = {
                    'width': g['gray'][ct(0x1a7)]()[ct(0x1a3)] * o,
                    'height': g[ct(0x1b6)][ct(0x1a7)]()[ct(0x273)] * o
                };
            var i = g[ct(0x208)],
                j = this.#p047[ct(0x1a7)]()[ct(0x1a3)],
                k = this.#p047[ct(0x1a7)]()['width'] / n;
            let q = cv[ct(0x1c1)](0x3, 0x3, cv[ct(0x2d0)], [0x1 / o, 0x0, -0x1 / o / o, 0x0, 0x1 / o, -0x1 / o / o, 0x0, 0x0, 0x1]),
                r = cv[ct(0x1c1)](0x3, 0x3, cv[ct(0x2d0)], [o, 0x0, 0x1 / o, 0x0, o, 0x1 / o, 0x0, 0x0, 0x1]);
            var l = new cv[(ct(0x1f7))]();
            cv[ct(0x274)](r, i, 0x1, q, 0x0, l, 0x0), cv[ct(0x22a)](this.#p047, m, l, p, 0x9), cv['resize'](m, m, {
                'width': 0x200,
                'height': 0x200
            }, 0x0, 0x0, cv['INTER_LINEAR']);
            const t = new ImageData(new Uint8ClampedArray(m[ct(0x26f)]), m[ct(0x299)], m[ct(0x2c9)]);
            let u = document[ct(0x192)](ct(0x2e3));
            !u && (u = document['createElement'](ct(0x2a1)), u['id'] = ct(0x2e3));
            u['width'] = m['cols'], u[ct(0x273)] = m['rows'];
            const v = u['getContext']('2d');
            v[ct(0x280)](0x0, 0x0, u[ct(0x1a3)], u[ct(0x273)]), v[ct(0x1ef)](t, 0x0, 0x0);
            const w = u['toDataURL'](ct(0x1b7));
            return m[ct(0x29f)](), w;
        }
    }#
    f047(e) {
        var cu = b4;
        const f = e['length'],
            g = e[cu(0x2eb)]((h, i) => h + i) / f;
        return e[cu(0x1b5)](h => Math[cu(0x24c)](h - g, 0x2))[cu(0x2eb)]((h, i) => h + i) / f;
    }
}

function c() {
    var cv = ['block', 'RANSAC', 'setTransform', 'autoplay', 'JdkYD', 'CANVAS', 'TermCriteria_EPS', 'vlnpo', 'videoHeight', 'graySharp', 'CV_32FC2', 'constructor', 'MAX_SIMULTANEOUS_TRACK', 'putImageData', 'wjxxl', 'dBUqG', 'min', 'Camera\x20', 'unpauseCamera', 'muted', 'laDLA', 'Mat', '-100', 'rOcaN', 'Point', 'CTX', 'DETECT_INTERVAL', 'data32F', 'search', 'TRACKER_NAME', 'initWebcamSettings', 'cDJFn', 'inv', 'patch', '74374pAzeZQ', 'parse', 'isImageTracked', 'PtILe', 'homography', 'detect', 'videoBackground', 'lastw', 'innerHeight', 'idealMatches', 'dwqpx', 'FRAMERATE', 'position', 'firstChild', 'hLdAa', 'correct', 'assign', 'LFhEY', 'findHomography', 'kpSharp', 'ECzoZ', '0px', 'indexOf', '(((.+)+)+)+$', 'label', 'startWebcam', 'appendChild', 'state', '1702224tOzVrd', 'unity-canvas', 'UPAKY', 'queryIdx', 'matches', 'MAX_PIXELS', 'debugIds', 'desSharp', 'bestMatchQuality', 'ASPECT_RATIO', 'warpPerspective', 'createTextNode', 'LcfCs', 'select', 'kjRld', 'ITRACKER_GLOBALS', 'kQgTB', 'cXgpB', 'toDataURL', 'projectPoints', 'set', 'Unity\x20build\x20is\x20using\x20a\x20different\x20plugin\x20version\x20and\x20may\x20not\x20function\x20properly\x20-\x20Please\x20rebuild\x20your\x20unity\x20project', 'nhbTO', 'SfrHW', 'keys', 'Rodrigues', 'bMREC', '478020tbUGyy', 'mtzTC', 'imshow', 'error', 'absolute', 'Bwkxw', 'okpXk', 'iTracker', 'SetCameraFov', 'debugChooseCam', 'measurementMatrix', 'INTER_LINEAR', 'tvec', '50%', 'DEBUG_CHOOSE_CAM', 'lastk', 'toString', 'pow', '0.0.0', 'display', 'abs', 'CANVAS_HEIGHT', 'NORM_HAMMING', 'dgzJL', 'now', 'true', 'WWrKF', 'CANVAS_WIDTH', 'checkAvailableCams', '27fGonCQ', 'opencv.js', '#matchPatches', 'sqrt', 'trainIdx', '113460rJczpU', 'selectedIndex', 'NaaRx', 'drawKeypoints', 'refinedMatches', 'targetsInScene', 'script', 'yEzuk', 'debugImages', 'jteJc', 'stopTracker', 'innerWidth', 'zIndex', 'resize', 'VIDEO', 'amFSg', 'random', 'CV_8UC4', 'data', 'kalman', 'pxnRA', 'OnTrackingFound', 'height', 'gemm', 'MAX_AREA', 'circle', 'lastDetectTime', 'hRijb', 'mqpmM', 'zZCPZ', 'fNfHR', 'maxLoc', 'split', 'pauseCamera', 'translate(-50%,0%)', 'clearRect', 'lasti', '#debugMatches', 'lastj', '10eDtmuo', 'COLOR_GRAY2RGB', 'iRZok', 'round', 'KfpXE', 'splice', 'Size', 'isStarted', 'onload', 'WnnEU', 'lastRefineMatchesTime', 'value', 'solvePnP', 'createElement', 'KeyPointVector', 'mojlb', 'TermCriteria_COUNT', 'CV_8UC1', 'push', 'addEventListener', 'eveep', 'cols', 'querySelector', 'trackedCount', 'CV_32F', 'fillConvexPoly', 'keypoint', 'delete', 'videoWidth', 'canvas', 'deviceId', 'copyTo', '78134lgHhKu', 'floor', 'OnTrackingLost', 'push_back', 'unityInstance', 'length', 'unityTargetFound\x20', 'NORM_L2', 'XQQVF', 'processNoiseCov', 'WuLwr', 'WEBCAM_SETTINGS', 'transform', 'unityTargetLost\x20', 'UbPdm', 'XOXli', 'calcOpticalFlowPyrLK', 'cFSwt', 'innerHTML', 'mul', 'coverage', 'setAttribute', 'getCameraTexture', 'get', 'kind', 'video', '#detectCompute', 'Uxnqm', 'cvtColor', 'cqTCG', 'setFramerate', 'lastUpdateTime', 'SendMessage', 'getUserMedia', 'DxaeA', 'perspectiveTransform', 'getBoundingClientRect', 'rows', 'getAttribute', 'GcvGQ', 'dot', 'addWeighted', 'videoinput', 'UhFHD', 'CV_64F', 'ceil', 'CLIENT_VERSION_ERROR', 'debugImageTarget', 'measurementNoiseCov', '50vw', 'ResizeVideo', '#getCorners', 'forEach', 'des', 'Rect', 'startWebcamDiv', 'untracked', 'COLOR_RGBA2GRAY', '492XbEepe', 'knnMatch', 'oCAKP', 'SIFT', 'cameraPaused', 'dataUrlCanvas', 'lastPoseIsStable', 'afKXj', 'MAX_TARGET_AREA', 'translate(0%,0%)\x20scale(', 'reverse', 'enumerateDevices', 'matchTemplate', 'reduce', 'HXebi', '#debugKps', 'statePost', 'JiHcL', 'FOV', 'getElementById', 'drawImage', '9017600VmgspU', 'tracked', 'WEBCAM_NAME', 'atan', 'HlSZq', 'KLYPm', 'startTracker', 'Scalar', 'insertBefore', 'left', 'JVneQ', 'play', 'QaWSs', 'jsete', 'includes', 'width', 'QOS', 'transitionMatrix', 'compute', 'size', 'TermCriteria', 'max', 'Anonymous', '4286733vCQssL', 'none', 'TRACK_TARGET_MATCH_COUNT', 'getImageData', 'log', 'DMatchVector', 'CV_32SC2', 'lastPose', 'onloadedmetadata', 'pause', 'map', 'gray', 'image/jpeg', 'randomIntFromInterval', 'meas', 'zeros', 'statePre', 'eaDYt', 'body', 'jdmhE', 'empty', 'aqnRx', 'matFromArray', 'style', 'rectangle', 'SUNLk', 'src', 'drawMatches', 'ORB', 'hNEwI', 'WARP_INVERSE_MAP', 'gOaqV', 'then', 'facing\x20front', 'lastMatchTrackTime', 'frLHr', '10ohZqtr', 'DMatchVectorVector', 'hasPrediction', 'BFMatcher', 'mediaDevices', 'top', 'srcObject', 'rotMat', 'translate(-50%,-50%)', 'line', 'roi', 'cjfvN', 'environment', 'TM_CCORR_NORMED', 'SOLVEPNP_ITERATIVE', 'resizeWithDelay', 'showChooseCam', 'errorCovPre', 'sJlBT'];
    c = function () {
        return cv;
    };
    return c();
};