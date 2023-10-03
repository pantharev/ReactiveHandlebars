
// show the content for the id and hide the other content.
// basis for a simple SPA application with handlebars templates (or any other template engine, or none at all)
function content(id) {
    console.log("content");
    console.log("showing: " + `#content-${id}`);
    $(`.content`).hide();

    $(`#content-${id}`).show();

    // add window push history state for the id
    window.history.pushState({id: id}, id, `/${id}`);
}