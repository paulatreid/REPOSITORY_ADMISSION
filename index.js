initializePage();

//To open the content modal of mail in desktop. 
$('[id^="mailListDesktopSubject"]').on('click', function (event) {
    event.stopPropagation();
    $('#contentModalDesktop').modal('toggle');

    // To decide the first mail to show. 
    var mailNumber = $(this).attr('id').replace("mailListDesktopSubject", "");
    var clickedMailInModal = document.getElementById("mailListDesktopModalMailBlock" + mailNumber);
    var clickedMailToShow = clickedMailInModal.cloneNode(true);
    clickedMailToShow.setAttribute("id", "mailListDesktopModalMailBlockClicked");
    mailListDesktopModalBody.insertBefore(clickedMailToShow, mailListDesktopModalAllMark);
});

//To remove the element of clicked mail when modal is hidden. 
$('#contentModalDesktop').on('hidden.bs.modal', function () {
    mailListDesktopModalMailBlockClicked.remove();
})

// To show the mail list when search button is clicked in desktop
$('#searchButtonDesktop').on('click', function (e) {
    e.preventDefault();
    localStorage.setItem("hasSearchResult", true);
    openMailListDesktop();
    searchButtonDesktop.blur();
})

// To show the mail list when search button is clicked in mobile
$('#searchButtonMobile').on('click', function (e) {
    e.preventDefault();
    localStorage.setItem("hasSearchResult", true);
    openMailListMobile();
    searchButtonMobile.blur();
})

// To toggle mail content in mobile
$('[id^="mailListMobileSubject"]').on('click', function (event) {
    event.stopPropagation();

    // To decide the first mail to show. 
    var mailNumber = $(this).attr('id').replace("mailListMobileSubject", "");
    var mailListMobileSubject = document.getElementById("mailListMobileSubject" + mailNumber);
    var mailListMobileContent = document.getElementById("mailListMobileContent" + mailNumber);

    mailListMobileContentSectionSubject.textContent = mailListMobileSubject.innerText;
    mailListMobileContentSectionContent.textContent = mailListMobileContent.innerText;

    contentSectionMobile.classList.remove('d-none');
    searchCountSectionsMobile.classList.add('d-none');
    mailListSectionsMobile.classList.add('d-none');
})

// To close mail content in mobile
$('#contentSectionMobile').on('click', function (event) {
    event.stopPropagation();
    mailListMobileContentSectionSubject.textContent = '';
    mailListMobileContentSectionContent.textContent = '';
    contentSectionMobile.classList.add('d-none');
    searchCountSectionsMobile.classList.remove('d-none');
    mailListSectionsMobile.classList.remove('d-none');
})

// To sort mails by address-From 
$('#mailListDesktopFrom').on('click', function (event) {
    event.stopPropagation();
    initializeMailListDesktopTo();
    initializeMailListDesktopSubject();
    initializeMailListDesktopDate();

    mailListDesktopFrom.classList.remove('text-muted');
    mailListDesktopFromArrow.classList.remove('d-none');
    mailListDesktopFromArrow.classList.toggle('flip-icon');
})

$('#mailListDesktopTo').on('click', function (event) {
    event.stopPropagation();
    initializeMailListDesktopFrom();
    initializeMailListDesktopSubject();
    initializeMailListDesktopDate();

    mailListDesktopTo.classList.remove('text-muted');
    mailListDesktopToArrow.classList.remove('d-none');
    mailListDesktopToArrow.classList.toggle('flip-icon');
})

$('#mailListDesktopHeadSubject').on('click', function (event) {
    event.stopPropagation();
    initializeMailListDesktopFrom();
    initializeMailListDesktopTo();
    initializeMailListDesktopDate();

    mailListDesktopHeadSubject.classList.remove('text-muted');
    mailListDesktopHeadSubjectArrow.classList.remove('d-none');
    mailListDesktopHeadSubjectArrow.classList.toggle('flip-icon');
})

$('#mailListDesktopDate').on('click', function (event) {
    event.stopPropagation();
    initializeMailListDesktopFrom();
    initializeMailListDesktopTo();
    initializeMailListDesktopSubject();

    mailListDesktopDate.classList.remove('text-muted');
    mailListDesktopDateArrow.classList.remove('d-none');
    mailListDesktopDateArrow.classList.toggle('flip-icon');
})

$('#mailListMobileFrom').on('click', function (event) {
    event.stopPropagation();
    initializeMailListMobileTo();
    initializeMailListMobileHeadSubject();
    initializeMailListMobileDate();

    mailListMobileFromLabel.classList.remove('text-muted');
    mailListMobileFromArrow.classList.remove('invisible');
    mailListMobileFromArrow.classList.toggle('flip-icon');
})

$('#mailListMobileTo').on('click', function (event) {
    event.stopPropagation();
    initializeMailListMobileFrom();
    initializeMailListMobileHeadSubject();
    initializeMailListMobileDate();

    mailListMobileToLabel.classList.remove('text-muted');
    mailListMobileToArrow.classList.remove('invisible');
    mailListMobileToArrow.classList.toggle('flip-icon');
})

$('#mailListMobileHeadSubject').on('click', function (event) {
    event.stopPropagation();
    initializeMailListMobileFrom();
    initializeMailListMobileTo();
    initializeMailListMobileDate();

    mailListMobileHeadSubjectLabel.classList.remove('text-muted');
    mailListMobileHeadSubjectArrow.classList.remove('invisible');
    mailListMobileHeadSubjectArrow.classList.toggle('flip-icon');
})

$('#mailListMobileDate').on('click', function (event) {
    event.stopPropagation();
    initializeMailListMobileFrom();
    initializeMailListMobileTo();
    initializeMailListMobileHeadSubject();

    mailListMobileDateLabel.classList.remove('text-muted');
    mailListMobileDateArrow.classList.remove('invisible');
    mailListMobileDateArrow.classList.toggle('flip-icon');
})

window.addEventListener('resize', changePresentationOrientation);

function initializePage() {
    localStorage.removeItem("hasSearchResult");
    changePresentationOrientation();
}

function isLandscape() {
    if (window.innerHeight <= window.innerWidth) {
        return true;
    } else {
        return false;
    }
}

function changePresentationOrientation() {
    if (isLandscape()) {
        if (containerDesktop.classList.contains("d-none")) {
            containerDesktop.classList.remove("d-none");
        }
        if (!searchCountSectionsMobile.classList.contains("d-none")) {
            searchCountSectionsMobile.classList.add("d-none");
        }
        if (!mailListSectionsMobile.classList.contains("d-none")) {
            mailListSectionsMobile.classList.add("d-none");
        }
        openMailListDesktop();
    } else {
        if (!containerDesktop.classList.contains("d-none")) {
            containerDesktop.classList.add("d-none");
        }
        if (searchCountSectionsMobile.classList.contains("d-none")) {
            searchCountSectionsMobile.classList.remove("d-none");
        }
        if (mailListSectionsMobile.classList.contains("d-none")) {
            mailListSectionsMobile.classList.remove("d-none");
        }
        openMailListMobile();
    }
}

function openMailListDesktop() {
    if (hasSearchResult()) {
        logoDesktop.classList.add('d-none');
        dividerDesktop.classList.add('d-none');
        mailListDesktop.classList.remove('d-none');
    }

    if (hasSearchResult() && mailListDesktopTbody.childElementCount > 0) {
        mailCountDesktop.textContent = mailListDesktopTbody.childElementCount;

        if (mailListDesktopTbody.childElementCount > 1) {
            mailCountDesktopPluralMark.classList.remove('d-none');
        }
    }
}

function openMailListMobile() {
    if (hasSearchResult()) {
        logoMobile.classList.add('d-none');
        dividerMobile.classList.add('d-none');
        mailListMobile.classList.remove('d-none');
    }

    if (hasSearchResult() && mailListMobileTbody.childElementCount > 0) {
        mailCountMobile.textContent = mailListMobileTbody.childElementCount;

        if (mailListMobileTbody.childElementCount > 1) {
            mailCountMobilePluralMark.classList.remove('d-none');
        }
    }
}

function hasSearchResult() {
    if (localStorage.getItem("hasSearchResult")) {
        return true;
    } else {
        return false;
    }
}

function initializeMailListDesktopFrom() {
    mailListDesktopFrom.classList.add('text-muted');
    mailListDesktopFromArrow.classList.add('d-none');
    mailListDesktopFromArrow.classList.add('flip-icon');
}
function initializeMailListDesktopTo() {
    mailListDesktopTo.classList.add('text-muted');
    mailListDesktopToArrow.classList.add('d-none');
    mailListDesktopToArrow.classList.add('flip-icon');
}
function initializeMailListDesktopSubject() {
    mailListDesktopHeadSubject.classList.add('text-muted');
    mailListDesktopHeadSubjectArrow.classList.add('d-none');
    mailListDesktopHeadSubjectArrow.classList.add('flip-icon');
}
function initializeMailListDesktopDate() {
    mailListDesktopDate.classList.add('text-muted');
    mailListDesktopDateArrow.classList.add('d-none');
    mailListDesktopDateArrow.classList.add('flip-icon');
}

function initializeMailListMobileFrom() {
    mailListMobileFromLabel.classList.add('text-muted');
    mailListMobileFromArrow.classList.add('invisible');
    mailListMobileFromArrow.classList.add('flip-icon');
}
function initializeMailListMobileTo() {
    mailListMobileToLabel.classList.add('text-muted');
    mailListMobileToArrow.classList.add('invisible');
    mailListMobileToArrow.classList.add('flip-icon');
}
function initializeMailListMobileHeadSubject() {
    mailListMobileHeadSubjectLabel.classList.add('text-muted');
    mailListMobileHeadSubjectArrow.classList.add('invisible');
    mailListMobileHeadSubjectArrow.classList.add('flip-icon');
}
function initializeMailListMobileDate() {
    mailListMobileDateLabel.classList.add('text-muted');
    mailListMobileDateArrow.classList.add('invisible');
    mailListMobileDateArrow.classList.add('flip-icon');
}