import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CenterHeader from './CenterHeader'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

function Header() {
    return (
        <header>
            <Container>
                <Row xs="3" className="py-1">
                    <Col>
                        <LeftHeader />
                    </Col>
                    <Col>
                        <CenterHeader />
                    </Col>
                    <Col>
                        <RightHeader />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
