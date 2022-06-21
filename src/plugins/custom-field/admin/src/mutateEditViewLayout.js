const mutateEditViewLayout = ({ layout, query }) => {
    const { edit } = layout.contentType.layouts;
  
    const enhancedEdit = edit.map(
      (row) =>
        row.map((field) => {
          const { customField } = field.fieldSchema.pluginOptions || {};
          if (customField?.contentType === 'health-detail-input') {
            return {
              ...field,
              fieldSchema: {
                ...field.fieldSchema,
                type: 'health-detail-input'
              },
            }
          }
          return field;
        })
    );
  
    return {
      query,
      layout: {
        ...layout,
        contentType: {
          ...layout.contentType,
          layouts: {
            ...layout.contentType.layouts,
            edit: enhancedEdit,
          },
        },
      },
    };
  };
  
  export default mutateEditViewLayout;
  