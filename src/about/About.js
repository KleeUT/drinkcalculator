import React from "react";
import styled from "styled-components";
const Copy = styled.p`
  font-size: small;
`;

const LinksList = styled.ul`
  font-size: small;
  list-style: none;
`;

const Link = styled.a`
  color: #fd7306;
`;
export default () => (
  <div>
    <Copy>
      This calculator was born out of me not being bothered to work out how many
      standard drinks were in a craft beer. The function for the calculator
      comes from the{" "}
      <Link href="http://www.alcohol.gov.au/internet/alcohol/publishing.nsf/Content/standard">
        Australian Government standard drinks page.
      </Link>{" "}
      A couple of days after I took the function from there that page seemed to
      disappear. I'm linking it here in case it comes back one day. Basically
      it's Volume, in litres, x Percentage x 0.789. I don't know who came up
      with that magic number or how, but that is what is/was there.
    </Copy>
    <Copy>Have fun, stay safe, drink responsibly, and all that jazz.</Copy>
    <LinksList>
      <li>
        <Link href="https://kleeut.com/">Klee Thomas</Link>
      </li>
      <li>
        <Link href="https://github.com/KleeUT/">GitHub</Link>
      </li>
    </LinksList>
  </div>
);

//volume / 1000 * percentage * 0.789
