const selectEntries= entries =>{
    cy.get('.custom-select.custom-select-sm.form-control.form-control-sm').select(`${entries}`)
}

export {selectEntries}
