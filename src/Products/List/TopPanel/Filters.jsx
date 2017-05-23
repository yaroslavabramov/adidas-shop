import React from 'react';
import styled from 'styled-components';

const Filters = styled.div`
    display: flex;
    flex-direction: row;
`;

const SexFilter = styled.div`
    margin-left: 30px;
    width: 180px;
    display: flex;
    justify-content: space-between;
`;

const SizeFilter = styled.div`
    width: 254px;
    display: flex;
    justify-content: space-between;
`;

const SizeLabel = styled.span`
   margin-left: 50px;
   margin-right: 18px;
   color: #4d42f8;
   font-family: AvenirNextBold;
   font-size: 24px;
   text-transform: uppercase;
`;

const Button = styled.button`
  padding: 0;
  font-family: AvenirNextBold;
  font-size: 24px;
  text-transform: uppercase;
  border: none;
  background: none;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  &:hover{
    color: #111;
  }
`;
export default () => (
  <Filters>
    <SexFilter>
      <Button isActive>man</Button>
      <Button>woman</Button>
    </SexFilter>
    <SizeLabel>size</SizeLabel>
    <SizeFilter>
      <Button>36</Button>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button>40</Button>
      <Button isActive>41</Button>
      <Button>42</Button>
    </SizeFilter>
  </Filters>
);
