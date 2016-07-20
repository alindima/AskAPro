@foreach($questions as $question)
	<div class="question">
		<div class="">
			<div class="author">
				<div class="photo">
					<img src="{{ $question->user->getProfilePicture() }}" alt="{{ $question->user->getName() }}" class="img-responsive">
				</div>
				<div class="name">
					<a href="{{ route('profile', $question->user->name) }}">
						{{ $question->user->getName() }}
					</a>
				</div>

				@if($question->solved())
					<div class="solved">
						<i class="fa fa-check" aria-hidden="true"></i>
					</div>
				@endif
			</div>
			<div class="title">
				<a href="{{ route('question.show', $question->slug) }}">
					{{ $question->title }}
				</a>
			</div>
			<div class="details">
				<div class="timestamp">
					{{ $question->created_at->diffForHumans() }}
				</div>
				<div class="tags-list">
					<ul class="tags">
						@foreach($question->tags as $tag)
							<li>{{ $tag->name }}</li>
						@endforeach
					</ul>
				</div>
			</div>
		</div>
	</div>
@endforeach