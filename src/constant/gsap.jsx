export * from 'gsap';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';

gsap.registerPlugin(TextPlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);
