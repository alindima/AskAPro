<div class="modal fade language-modal" id="languageModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Choose Language</h4>
            </div>
            <div class="modal-body">
                <ul>

                    @foreach(Config::get('app.locale_list') as $key=>$value)
                        <li>
                            <a href="{{ route('setLang', $value) }}">{{ $key }}</a>
                        </li>
                    @endforeach
                    
                </ul>
            </div>
        </div>
    </div>
</div>