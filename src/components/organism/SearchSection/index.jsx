import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//material components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

//React components
import { FormSearch } from "components/molecule/Form";
import { myTheme } from "components/template";
import { SearchButton } from "components/atom/Button";
import ImgBackground from "components/atom/ImgBackground";

//Hooks
import useRol from "hooks/useRol";

const PageSection = styled.div`
  margin: ${(props) => props.theme.pageSections.margins};
`;

const FormPosition = styled.div`
  margin: 0rem 70% 0em 0em;
`;

const ButtonPosition = styled.div`
  width: 100%;
`;
const BackgroundPosition = styled.div`
  margin: 2rem 3em 2em 70%;
`;

function SearchSection({ theme }) {
  //const listRol = useRol();
  //console.log(listRol);

  return (
    <PageSection theme={theme}>
      <FormPosition>
        <Card sx={{ p: 2 }}>
          <Typography sx={{ p: 2 }} variant="h4" gutterBottom component="h1">
            Encuentra hoteles y alojamientos vacacionales en Estados Unidos
          </Typography>
          <Typography
            sx={{ p: 2 }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            Desde hoteles con excelentes evaluaciones hasta espacios
            vacacionales y todo tipo de alojamientos.
          </Typography>
          <FormSearch select2Hook={useRol}>
            <ButtonPosition textAlign="center">
              <SearchButton sx={{ p: 2 }}></SearchButton>
            </ButtonPosition>
          </FormSearch>
        </Card>
      </FormPosition>
      <BackgroundPosition>
        <ImgBackground />
      </BackgroundPosition>
    </PageSection>
  );
}

SearchSection.propTypes = {
  theme: PropTypes.object,
};

SearchSection.defaultProps = {
  theme: {
    pageSections: myTheme.pageSections,
  },
};

export default SearchSection;
