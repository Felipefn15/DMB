import React, { useEffect, useState } from 'react';
import {
    AboutWrapper,
    ContentWrapper,
    Content,
    Footer,
    Information,
    Text,
    ShopDiv,
    Button,
    RightImage,
    Form,
    Links,
    LinkOne,
    LinkTwo,
    TopImage
} from './style.js';

const Desktop = (
    <AboutWrapper>
        <ContentWrapper>
            <Content>
                <Information>
                    <Text>
                        {`Allow us to introduce ourselves.
                                Prazer! {Portuguese for: it’s nice to meet you}. 
                                We are D.M. a new sparkling wine brand from Brazil, 
                                with our grapes grown in the Valley of the Vineyard in Southern Brazil. 
                                An entirely new class of sparkling wine. Try us and see what we mean.`}
                    </Text>
                    <ShopDiv>
                        <Button>SHOP</Button>
                        <div>
                            <p>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                                <span className="times">FREE SHIPPING -&nbsp;</span>
                                <span>FREE SHIPPING -&nbsp;</span>
                            </p>
                        </div>
                    </ShopDiv>
                    <Text>
                        {`Made in the traditional champagne method with a Brazilian touch,
                                D.M. is sparkling wine that is uniquely flexible and versatile. 
                                You can drink D.M. however you like, whenever you like. 
                                Each sip brings the beauty, culture, and expression that is the best of old and new world winemaking. 
                                It’s what makes us unmistakably Brazilian.`}
                    </Text>
                </Information>
                <RightImage>
                    <img src="/images/aboutImage.jpg" alt="champagne" />
                    <p>
                        60% <br />
                        Chardonnay
                        <br /> 40% <br />
                        Pinot Noir, <br />
                        matured <br />
                        12 months
                    </p>
                </RightImage>
            </Content>
        </ContentWrapper>
        <Footer>
            <Form>
                <input type="email" placeholder="Type in your email..." value="" />
                <button name="subscribe" disabled="" type="submit">
                    Subscribe
                </button>
            </Form>
            <Links>
                <p>CC Dom Maria 2020</p>
                <div>
                    <LinkOne>
                        <a target="_blanck" href="https://www.facebook.com/dmbrut">
                            Facebook
                        </a>
                        <a target="_blanck" href="https://www.instagram.com/dmbrut">
                            Instagram
                        </a>
                    </LinkOne>
                    <LinkTwo>
                        <a target="_blank" href="/privacy">
                            Privacy
                        </a>
                        <a target="_blank" href="/shipping-policy">
                            Shipping Policy
                        </a>
                        <a target="_blank" href="/disclaimer">
                            Disclaimer
                        </a>
                    </LinkTwo>
                </div>
            </Links>
        </Footer>
    </AboutWrapper>
);

const Mobile = (
    <AboutWrapper>
        <ContentWrapper>
            <Content>
                <ShopDiv>
                    <div>
                        <p>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                            <span className="times">FREE SHIPPING -&nbsp;</span>
                            <span>FREE SHIPPING -&nbsp;</span>
                        </p>
                    </div>
                </ShopDiv>
                <TopImage>
                    <img src="/images/aboutImage.jpg" alt="champagne" />
                    <p>
                        60% <br />
                        Chardonnay
                        <br /> 40% <br />
                        Pinot Noir, <br />
                        matured <br />
                        12 months
                    </p>
                </TopImage>
                <Button>SHOP</Button>
                <Information>
                    <Text>
                        {`Allow us to introduce ourselves.
                            Prazer! {Portuguese for: it’s nice to meet you}. 
                            We are D.M. a new sparkling wine brand from Brazil, 
                            with our grapes grown in the Valley of the Vineyard in Southern Brazil. 
                            An entirely new class of sparkling wine. Try us and see what we mean.`}
                    </Text>
                    <Text>
                        {`Made in the traditional champagne method with a Brazilian touch,
                            D.M. is sparkling wine that is uniquely flexible and versatile. 
                            You can drink D.M. however you like, whenever you like. 
                            Each sip brings the beauty, culture, and expression that is the best of old and new world winemaking. 
                            It’s what makes us unmistakably Brazilian.`}
                    </Text>
                </Information>
            </Content>
        </ContentWrapper>
        <Footer>
            <Form>
                <input type="email" placeholder="Type in your email..." value="" />
                <button name="subscribe" disabled="" type="submit">
                    Subscribe
                </button>
            </Form>
            <Links>
                <div>
                    <LinkOne>
                        <a target="_blanck" href="https://www.facebook.com/dmbrut">
                            Facebook
                        </a>
                        <a target="_blanck" href="https://www.instagram.com/dmbrut">
                            Instagram
                        </a>
                    </LinkOne>
                    <LinkTwo>
                        <a target="_blank" href="/privacy">
                            Privacy
                        </a>
                        <a target="_blank" href="/shipping-policy">
                            Shipping Policy
                        </a>
                        <a target="_blank" href="/disclaimer">
                            Disclaimer
                        </a>
                    </LinkTwo>
                </div>

                <p>CC Dom Maria 2020</p>
            </Links>
        </Footer>
    </AboutWrapper>
);

function App() {
    const [display, setDisplay] = useState(false);
    const [width, setWidth] = useState(screen.width);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        width > 768 ? setDisplay(true) : setDisplay(false);
        window.addEventListener('resize', handleResize);
    });

    return display ? Desktop : Mobile;
}

export default App;
