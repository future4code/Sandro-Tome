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
    history.push("/gerenciador");
  };

export const goToSignUpPage = (history) => {
    history.push("/cadastro");
  };

export const goToCreateTravelPage = (history) => {
    history.push("/gerenciador/criar-viagem");
  };

export const goToListTravelPage = (history) => {
    history.push("/gerenciador/viagens-criadas");
  };

export const  goToApprovePage = (history) => {
  history.push("/gerenciador/aprovacao/:id");
};

export const goToFormPage = (history) => {
    history.push("/viagens-disponiveis/aplicacao");
  };