export const goToHomePage = (history) => {
    history.push("/");
  };
  
export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
export const goToOnTravelsPage = (history) => {
    history.push("/viagens-disponiveis");
  };

export const goToManagePage = (history) => {
    history.push("/login/gerenciador");
  };

export const goToSignUpPage = (history) => {
    history.push("/cadastro");
  };

export const goToCreateTravelPage = (history) => {
    history.push("/login/gerenciador/criar-viagem");
  };

export const goToListTravelPage = (history) => {
    history.push("/login/gerenciador/viagens-criadas");
  };

export const goToFormPage = (history) => {
    history.push("/viagens-disponiveis/aplicacao");
  };