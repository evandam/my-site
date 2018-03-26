from django import forms
from .models import Comment


class BaseForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(BaseForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field_class = field.widget.__class__.__name__
            if field_class == 'Textarea':
                css_class = 'textarea'
            elif field_class == 'Select' or field_class == 'SelectMultiple':
                css_class = 'select'
            elif field_class == 'RadioSelect':
                css_class = 'radio'
            elif field_class == 'CheckboxInput' or field_class == 'CheckboxSelectMultiple':
                css_class = 'checkbox'
            else:
                css_class = 'input'

            field.widget.attrs['class'] = css_class


class CommentForm(BaseForm):
    class Meta:
        model = Comment
        fields = '__all__'
        widgets = {
            'post': forms.HiddenInput(),
            'message': forms.Textarea(attrs={'rows': 5})
        }

    def __init__(self, *args, **kwargs):
        super(CommentForm, self).__init__(*args, **kwargs)
        self.fields['email'].help_text = "Don't worry, your email won't be shared."
        self.fields['message'].help_text = "Markdown is supported!"