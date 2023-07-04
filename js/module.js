import petsData from './pets.json' assert {type: 'json'};

    function createPetCard(petData) {
      
        const petsContainer = document.getElementById('pets-container');
      
        const petCard = document.createElement('div');
        petCard.classList.add('ourfriends_petscard', 'flex-card');
        petCard.id = `pet-card-${petData.id}`;
    
        const petImageWrapper = document.createElement('figure');
        petImageWrapper.classList.add('ourfriends_petscard_img');
    
        const petImage = document.createElement('img');
        petImage.src = petData.img;
        petImage.alt = petData.name;
        petImage.id = `pet-image-${petData.id}`;
    
        const petName = document.createElement('p');
        petName.classList.add('ourfriends_petscard_petsname');
        petName.id = `pet-name-${petData.id}`;
        petName.textContent = petData.name;
    
        const petButtonWrapper = document.createElement('div');
        petButtonWrapper.classList.add('ourfriends_petscard__button', 'button-petscard');
    
        const petButton = document.createElement('a');
        petButton.id = `pet-button-${petData.id}`;
        petButton.textContent = 'Learn more';
        petButton.onclick = function() {
          modalWrap.classList.add('modal');
          document.documentElement.style.overflow = 'hidden';
        }

        const modalWrap = document.createElement('div');
        modalWrap.classList.add('modal-wrap');
        petCard.appendChild(modalWrap);
        modalWrap.onclick = function() {
          modalWrap.classList.remove('modal');
          document.documentElement.style.overflow = 'auto';
        }

        const modalWindow = document.createElement('div');
        modalWindow.classList.add('modal-window');
        modalWrap.appendChild(modalWindow);
      
        const modalClose = document.createElement('button');
        modalClose.classList.add('modal-close');
        modalWindow.appendChild(modalClose);
        modalClose.onclick = function() {
          modalWrap.classList.remove('active');
          document.documentElement.style.overflow = 'auto';
        }
      
        const modalImgWrap = document.createElement('figure');
        modalImgWrap.classList.add('modal-img');
        modalWindow.appendChild(modalImgWrap);
      
        const modalpetsImg = document.createElement('img');
        modalpetsImg.src = petData.img;
        modalpetsImg.alt = petData.name;
        modalImgWrap.appendChild(modalpetsImg);
      
        const modalpetsInfo = document.createElement('div');
        modalpetsInfo.classList.add('pets-info');
        modalWindow.appendChild(modalpetsInfo);
      
        const modalpetsInfoTitle = document.createElement('h2');
        modalpetsInfoTitle.classList.add('pets-info__title');
        modalpetsInfoTitle.textContent = petData.name;
        modalpetsInfo.appendChild(modalpetsInfoTitle);
      
        const modalpetsInfoSubTitle = document.createElement('div');
        modalpetsInfoSubTitle.classList.add('pets-info__subtitle');
        modalpetsInfo.appendChild(modalpetsInfoSubTitle);
      
        const modalpetsInfoType = document.createElement('span');
        modalpetsInfoType.classList.add('pets-info__type');
        modalpetsInfoType.textContent = petData.type;
        modalpetsInfoSubTitle.appendChild(modalpetsInfoType);
      
        const modalpetsInfoDash = document.createElement('span');
        modalpetsInfoDash.classList.add('pets-info__dash');
        modalpetsInfoDash.textContent = '-';
        modalpetsInfoSubTitle.appendChild(modalpetsInfoDash);
      
        const modalpetsInfoBreed = document.createElement('span');
        modalpetsInfoBreed.classList.add('pets-info__breed');
        modalpetsInfoBreed.textContent = petData.breed;
        modalpetsInfoSubTitle.appendChild(modalpetsInfoBreed);
        
        const modalpetsInfoDescription= document.createElement('p');
        modalpetsInfoDescription.classList.add('pets-info__description');
        modalpetsInfoDescription.textContent = petData.description;
        modalpetsInfo.appendChild(modalpetsInfoDescription);
      
        const modalpetsInfoList= document.createElement('ul');
        modalpetsInfoList.classList.add('pets-info__list');
        modalpetsInfo.appendChild(modalpetsInfoList);
      
        const modalpetsInfoListItemAge= document.createElement('li');
        modalpetsInfoListItemAge.classList.add('pets-info__list-item');
        modalpetsInfoList.appendChild(modalpetsInfoListItemAge);
      
        const modalpetsInfoListItemAgeTitle= document.createElement('span');
        modalpetsInfoListItemAgeTitle.classList.add('pets-info__list-item__title');
        modalpetsInfoListItemAgeTitle.textContent = "Age: ";
        modalpetsInfoListItemAge.appendChild(modalpetsInfoListItemAgeTitle);
      
        const modalpetsInfoListItemAgeDescription= document.createElement('span');
        modalpetsInfoListItemAgeDescription.classList.add('pets-info__list-item__description');
        modalpetsInfoListItemAgeDescription.textContent = petData.age;
        modalpetsInfoListItemAge.appendChild(modalpetsInfoListItemAgeDescription);
      
        const modalpetsInfoListItemInoculations= document.createElement('li');
        modalpetsInfoListItemInoculations.classList.add('pets-info__list-item');
        modalpetsInfoList.appendChild(modalpetsInfoListItemInoculations);
        
        const modalpetsInfoListItemInoculationsTitle= document.createElement('span');
        modalpetsInfoListItemInoculationsTitle.classList.add('pets-info__list-item__title');
        modalpetsInfoListItemInoculationsTitle.textContent = "Inoculations: ";
        modalpetsInfoListItemInoculations.appendChild(modalpetsInfoListItemInoculationsTitle);

        const modalpetsInfoListItemInoculationsDescription= document.createElement('span');
        modalpetsInfoListItemInoculationsDescription.classList.add('pets-info__list-item__description');
        modalpetsInfoListItemInoculationsDescription.textContent = petData.inoculations;
        modalpetsInfoListItemInoculations.appendChild(modalpetsInfoListItemInoculationsDescription);

        const modalpetsInfoListItemDisiases= document.createElement('li');
        modalpetsInfoListItemDisiases.classList.add('pets-info__list-item');
        modalpetsInfoList.appendChild(modalpetsInfoListItemDisiases);

        const modalpetsInfoListItemDisiasesTitle= document.createElement('span');
        modalpetsInfoListItemDisiasesTitle.classList.add('pets-info__list-item__title');
        modalpetsInfoListItemDisiasesTitle.textContent = "Disiases: ";
        modalpetsInfoListItemDisiases.appendChild(modalpetsInfoListItemDisiasesTitle);

        const modalpetsInfoListItemDisiasesDescription= document.createElement('span');
        modalpetsInfoListItemDisiasesDescription.classList.add('pets-info__list-item__description');
        modalpetsInfoListItemDisiasesDescription.textContent = petData.diseases;
        modalpetsInfoListItemDisiases.appendChild(modalpetsInfoListItemDisiasesDescription);

        const modalpetsInfoListItemParasites = document.createElement('li');
        modalpetsInfoListItemParasites.classList.add('pets-info__list-item');
        modalpetsInfoList.appendChild(modalpetsInfoListItemParasites);

        const modalpetsInfoListItemParasitesTitle= document.createElement('span');
        modalpetsInfoListItemParasitesTitle.classList.add('pets-info__list-item__title');
        modalpetsInfoListItemParasitesTitle.textContent = "Parasites: ";
        modalpetsInfoListItemParasites.appendChild(modalpetsInfoListItemParasitesTitle);

        const modalpetsInfoListItemParasitesDescription= document.createElement('span');
        modalpetsInfoListItemParasitesDescription.classList.add('pets-info__list-item__description');
        modalpetsInfoListItemParasitesDescription.textContent = petData.parasites;
        modalpetsInfoListItemParasites.appendChild(modalpetsInfoListItemParasitesDescription);

        petsContainer.appendChild(petCard);

        




        
        petImageWrapper.appendChild(petImage);
        petCard.appendChild(petImageWrapper);
        petCard.appendChild(petName);
        petButtonWrapper.appendChild(petButton);
        petCard.appendChild(petButtonWrapper);
        petsContainer.appendChild(petCard);
      }
      for (const petData of petsData) {
        createPetCard(petData);
      }
























//слайдер
function getRandomPetsData(petsData, count) {
    const randomPetsData = [];
    const petsDataCopy = [...petsData];
  
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * petsDataCopy.length);
      const randomPetData = petsDataCopy.splice(randomIndex, 1)[0];
      randomPetsData.push(randomPetData);
    }
  
    return randomPetsData;
  }
  
  function updateCarousel() {
    const carouselTrack = document.getElementById('pets-container');
    const prevButton = document.getElementById('button-up');
    const nextButton = document.getElementById('button-down');
    
    const cardWidth = 270;
    const visibleCards = 3;
    const totalCards = petsData.length;
    const totalWidth = cardWidth * totalCards;
  
    carouselTrack.style.width = totalWidth + 'px';
  
    prevButton.addEventListener('click', () => {
      
      carouselTrack.style.transform = `translateX(${totalWidth}px)`;
      carouselTrack.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        carouselTrack.style.transform = '';
        carouselTrack.style.transition = '';
        for (let i = 0; i < visibleCards; i++) {
          carouselTrack.insertBefore(carouselTrack.lastElementChild, carouselTrack.firstElementChild);
        }
      }, 300);
    });
  
    nextButton.addEventListener('click', () => {
      
      for (let i = 0; i < visibleCards; i++) {
        carouselTrack.appendChild(carouselTrack.firstElementChild);
      }
      carouselTrack.style.transform = `translateX(-${totalWidth}px)`;
      carouselTrack.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        carouselTrack.style.transform = '';
        carouselTrack.style.transition = '';
      }, 300);
    });
  }
  
  const randomPetsData = getRandomPetsData(petsData, 8); 
  randomPetsData.forEach(petData => {
    createPetCard(petData); 
  });
  
  updateCarousel();
  
  