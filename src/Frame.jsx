import { FrameWrapper, FrameHeader, Circle } from './StyledModule';

const Frame = ({children}) => {
    const colors = ['#ff5f57', '#ffbc2f', '#28c840']
    return (
        <FrameWrapper>
            <FrameHeader>
                {colors.map((color, index) => {
                    return(
                        <Circle key={index} fill={color}></Circle>
                    )
                })}
            </FrameHeader>
            {children}
        </FrameWrapper>
    )
}

export default Frame