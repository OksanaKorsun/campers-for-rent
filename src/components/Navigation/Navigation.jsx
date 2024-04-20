import { NavigationWrapper, StyledLink } from "./Navigation.styled"
export const Navigation = () => {
    return (<NavigationWrapper>
        <StyledLink to="/catalog">
          Catalog
        </StyledLink>
        <StyledLink to="/favorites">
          Favorite
        </StyledLink>
    </NavigationWrapper>)
}