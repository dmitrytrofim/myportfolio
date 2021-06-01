//Delivery
$('.conditions__list-item-delivery').click(function () {
    $(".conditions__info-description-title-warranty, .conditions__info-description-text-warranty, .conditions__info-description-title-credit, .conditions__info-description-text-credit").css("display", "none");
    $(".conditions__info-description-title-delivery, .conditions__info-description-text-delivery").css("display", "block");
});
//Warranty
$('.conditions__list-item-warranty').click(function () {
    $(".conditions__info-description-title-delivery, .conditions__info-description-text-delivery, .conditions__info-description-title-credit, .conditions__info-description-text-credit").css("display", "none");
    $(".conditions__info-description-title-warranty, .conditions__info-description-text-warranty").css("display", "block");
});
//Credit
$('.conditions__list-item-credit').click(function () {
    $(".conditions__info-description-title-delivery, .conditions__info-description-text-delivery, .conditions__info-description-title-warranty, .conditions__info-description-text-warranty").css("display", "none");
    $(".conditions__info-description-title-credit, .conditions__info-description-text-credit").css("display", "block");
});
