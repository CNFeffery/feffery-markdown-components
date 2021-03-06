# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyMarkdown(Component):
    """A FefferyMarkdown component.


Keyword arguments:

- id (string; optional)

- codeStyle (string; default 'coy-without-shadows')

- linkTarget (string; default '_blank')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- markdownStr (string; optional)

- renderHtml (boolean; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, markdownStr=Component.UNDEFINED, codeStyle=Component.UNDEFINED, renderHtml=Component.UNDEFINED, linkTarget=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'codeStyle', 'linkTarget', 'loading_state', 'markdownStr', 'renderHtml']
        self._type = 'FefferyMarkdown'
        self._namespace = 'feffery_markdown_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'codeStyle', 'linkTarget', 'loading_state', 'markdownStr', 'renderHtml']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FefferyMarkdown, self).__init__(**args)
