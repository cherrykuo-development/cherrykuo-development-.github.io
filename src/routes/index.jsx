import React, { useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { gsap } from 'gsap';

import Home from '../pages/Home';
import FrontEnd from '../pages/FrontEnd';

// const completeCall = target => {
//     gsap.set(target, { clearProps: 'position' });
// };

const Routes = props => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onEnterHandler = node => {
        gsap.killTweensOf(node);
        gsap.set(node, {
            x: 100,
            autoAlpha: 0,
        });
        gsap.to(node, {
            x: 0,
            autoAlpha: 1,
            duration: 0.4,
            // onComplete: completeCall,
            // onCompleteParams: [node],
        });
    };

    return (
        <TransitionGroup className='w-full mt-24 laptop:mt-20'>
            <Transition timeout={400} key={props.location.pathname} onEnter={onEnterHandler}>
                <Switch>
                    <Route path='/frontend'>
                        <FrontEnd />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Transition>
        </TransitionGroup>
    );
};

export default Routes;
