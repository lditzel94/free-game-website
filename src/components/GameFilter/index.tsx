import React, { ChangeEvent, ReactElement } from 'react'
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './constants'
import { Form, Label, Select } from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}>
		<Label htmlFor="platform-select">
			Platform:
			<Select name="platform" id="platform-select">
				{PLATFORMS.map(platform => (
					<option value={platform.value} key={platform.value}>
						{platform.display}
					</option>
				))}
			</Select>
		</Label>
		<Label htmlFor="genre-select">
			Genre:
			<Select name="platform" id="genre-select">
				{GENRES.map(genre => (
					<option value={genre.value} key={genre.value}>
						{genre.display}
					</option>
				))}
			</Select>
		</Label>
		<Label htmlFor="tag-select">
			Tag:
			<Select name="platform" id="tag-select">
				{TAGS.map(tag => (
					<option value={tag.value} key={tag.value}>
						{tag.display}
					</option>
				))}
			</Select>
		</Label>
		<Label htmlFor="sortBy-select">
			Sort By:
			<Select name="platform" id="sortBy-select">
				{SORT_BY.map(sortBy => (
					<option value={sortBy.value} key={sortBy.value}>
						{sortBy.display}
					</option>
				))}
			</Select>
		</Label>
	</Form>
)

export default GameFilter
